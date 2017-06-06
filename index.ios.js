/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';
import App from './App';

export default class IOSApp extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('FontSizeSample', () => IOSApp);
