# rn-status-bar

Ios and Android Status bar color natively

## Installation

```sh
npm install rn-status-bar
```
```sh
yarn add rn-status-bar
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'rn-status-bar';

export default function App() {
  React.useLayoutEffect(() => {
    StatusBar.setBackgroundColorIOS('#ec4899');
  }, []);

  return (
    <View style={styles.container}>
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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
