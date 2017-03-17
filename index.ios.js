/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

console.log('CUSTOM_ENV=' + process.env['CUSTOM_ENV']);
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var test = 'foo';
import Config from 'react-native-config';

export default class ConfigTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>

            CUSTOM_ENV={Config.CUSTOM_ENV}

        </Text>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('ConfigTest', () => ConfigTest);
