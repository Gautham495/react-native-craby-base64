import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { encodeString, decodeToString } from 'react-native-craby-base64';

function App() {
  const [encoded, setEncoded] = useState<string>('');
  const [decodedString, setDecodedString] = useState<string>('');

  useEffect(() => {
    const input = 'Hello World!';

    // Encode
    const b64 = encodeString(input);
    setEncoded(b64);

    // Decode (UTF-8)
    const decoded = decodeToString(b64);
    setDecodedString(decoded);
  }, []);

  return (
    <View>
      <Text>Encoded: {encoded}</Text>
      <Text>Decoded String: {decodedString}</Text>
    </View>
  );
}

export default App;
