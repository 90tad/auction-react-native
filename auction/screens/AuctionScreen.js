import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import AppContext from '../app_context/AppContext';

export default class SettingScreen extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{context.number}</Text>
            <Button onPress={context.inc}>inc</Button>
          </View>
        )}
      </AppContext.Consumer>
    );
  }
}
