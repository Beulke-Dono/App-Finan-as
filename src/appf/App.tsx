import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initDb } from './database/db';

export default function App() {
  useEffect(() => {
    initDb();
  }, []);

  return (
    <View>
      <Text>App com SQLite</Text>
    </View>
  );
}
