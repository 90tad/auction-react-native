import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Logo from './logo';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Logo />
      </View>
    );
  }
}
