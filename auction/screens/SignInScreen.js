import React, {useState, useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import EditText from '../components/EditText';
import MButton from '../components/MButton';
import AppContext from '../app_context/AppContext';

function SignInScreen() {
  const context = useContext(AppContext);
  const {signIn, pendingRequest} = context;
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('12345678');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <EditText username onChangeText={text => setUsername(text)} />
        <EditText password onChangeText={text => setPassword(text)} />
        <MButton signIn onPress={signIn} />
        <View style={{height: 24}}>
          {pendingRequest ? <ActivityIndicator size={24} /> : null}
        </View>
      </View>
    </View>
  );
}
export default SignInScreen;
