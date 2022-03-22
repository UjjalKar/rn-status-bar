import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'rn-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#557B83" />
      <Text>IOS Status Bar Background Color</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
