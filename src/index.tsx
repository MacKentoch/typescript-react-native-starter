// @flow

// #region imports
import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DummyComponent from './components/DummyComponent';
import AnotherDummyComponent from './components/AnotherDummyComponent';
// #endregion

// #region types
type Props = {};

type State = {};
// #endregion

// #region constants
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// #endregion

export default class App extends Component<Props, State> {
  render() {
    // const {  } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>a TypeScript Parent</Text>
        <DummyComponent title="a typescript component" />
        <AnotherDummyComponent title="a JS component" />
      </View>
    );
  }
}

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// #endregion
