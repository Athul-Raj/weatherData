/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationStack} from './utility/NavigationStack';

const App: () => React$Node = () => {
  return <NavigationStack />;
};

export default App;
