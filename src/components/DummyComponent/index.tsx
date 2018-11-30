// #region imports
import React from 'react';
import { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// #endregion

// #region types
type Props = {
  title: string,
};

type State = {};
// #endregion

class DummyComponent extends PureComponent<Props, State> {
  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}

// #region styles
const styles = StyleSheet.create({
  container: {},
});
// #endregion

export default DummyComponent;
