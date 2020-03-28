import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ActivityIndicator, Button} from 'react-native-paper';
import AppContext from '../app_context/AppContext';

function SettingScreen() {
    return (
        <AppContext.Consumer>
            {context => (
                <View
                    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{context.number}</Text>
                    {context.pendingRequest ? <ActivityIndicator/> : null}
                    <Button onPress={context.signIn}>sign in</Button>
                    <Button onPress={context.test}>test</Button>
                </View>
            )}
        </AppContext.Consumer>
    );
}

export default SettingScreen;
