import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.renderText = this.renderText.bind(this)
  }

  renderText(fontSize) {
    return (
      <Text key={fontSize} style={{fontSize: fontSize}}>サイズ{fontSize}</Text>
    )
  }
  
  render() {
    return (
      <ScrollView>
        {
          Array(101).fill(0).map((e, index) => {
            return this.renderText(index)
          })
        }
      </ScrollView>
    );
  }
}