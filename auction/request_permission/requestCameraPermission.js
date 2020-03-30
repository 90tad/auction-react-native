import {PermissionsAndroid} from 'react-native';
import React from 'react';

const title = 'Need permission';
const message = 'Application need access your camera';

const requestCameraPermission = async function({onAccepted, onDenied}) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: title,
        message: message,
        buttonNegative: 'Deni',
        buttonPositive: 'Accept',
        buttonNeutral: 'Ask me later',
      },
    );
    console.log(`granted: ${granted}`)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      onAccepted();
    } else {
      onDenied();
    }
  } catch (e) {
    console.warn(`cameraError: ${e}`);
  }
};

export default requestCameraPermission
