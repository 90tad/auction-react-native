import React,{useContext,useState,useEffect} from 'react';
import {View} from 'react-native';
import AppContext from '../app_context/AppContext';

function ScreenASD() {

  const context = useContext(AppContext)
  const {signIn, pendingRequest} = context;
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('12345678');

  return <View style={{backgroundColor: 'blue', flex: 1}} />;
}

export default ScreenASD;
