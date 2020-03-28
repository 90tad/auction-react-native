import AsyncStorage from '@react-native-community/async-storage';

export const storeSignInResponse = async function(signInResponse) {
  const data = JSON.stringify(signInResponse);
  try {
    await AsyncStorage.setItem('SIGN_IN_RESPONSE', data);
  } catch (error) {
    console.log(error);
  }
};

export const getSignInResponse = async function() {
  try {
    const value = await AsyncStorage.getItem('SIGN_IN_RESPONSE');
    if (value != null) {
      console.log(`asyn: ${value}`);
    }
  } catch (e) {
    console.log(e);
  }
};
