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
  const [encoded, setEncoded] = useState<string>('');
  const [decodedString, setDecodedString] = useState<string>('');

  useEffect(() => {
    const input = 'Hello World!';

    // Encode
    const b64 = Base64.encodeString(input);
    setEncoded(b64);

    // Decode (UTF-8)
    const decoded = Base64.decodeToString(b64);
    setDecodedString(decoded);
  }, []);

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.text}>Encoded: {encoded}</Text>
      <Text style={styles.text}>Decoded String: {decodedString}</Text>
    </View>
  );
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
