import React, {Component, useState, useContext, useEffect} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import EditText from '../components/EditText';
import AppContext from '../app_context/AppContext';
import MButton from '../components/MButton';

function PersonalScreen() {

    const context = useContext(AppContext);
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('12345678');
    const {signIn, pendingRequest, currentUser} = context;

    useEffect(() => {
        if (currentUser != null) {
            console.log(`currentUser: ${JSON.stringify(currentUser)}`);
        }
    });

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <EditText username
                      onChangeText={text => setUsername(text)}/>
            <EditText password
                      onChangeText={text => setPassword(text)}/>
            <MButton signIn onPress={signIn}/>
            <View style={{height: 24}}>{pendingRequest ? <ActivityIndicator size={24}/> : null}</View>
        </View>
    );
}

export default PersonalScreen;
