import React from 'react';

import {Alert} from 'react-native';

export default function ErrorAlert() {
  return Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: true},
  );
}
