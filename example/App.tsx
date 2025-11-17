/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Base64 from 'react-native-craby-base64';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [encoded, setEncoded] = useState('');
  const [decodedString, setDecodedString] = useState('');
  const [decodedBytes, setDecodedBytes] = useState<Uint8Array | null>(null);

  useEffect(() => {
    const input = 'Hello World!';

    // Encode
    const b64 = Base64.encode_string(input);
    setEncoded(b64);

    // Decode (UTF-8)
    const decoded = Base64.decode_to_string(b64);
    setDecodedString(decoded);

    // Decode to bytes (base64 string → convert to Uint8Array)
    const b64Bytes = Base64.decode_to_bytes(b64);
    const byteArray = convertBase64ToUint8Array(b64Bytes);
    setDecodedBytes(byteArray);
  }, []);

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.text}>Encoded: {encoded}</Text>
      <Text style={styles.text}>Decoded String: {decodedString}</Text>
      <Text style={styles.text}>
        Decoded Bytes: {decodedBytes ? `[${decodedBytes.join(', ')}]` : ''}
      </Text>
    </View>
  );
}

// Convert the base64 string returned by Rust → Uint8Array
function convertBase64ToUint8Array(base64: string) {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default App;
