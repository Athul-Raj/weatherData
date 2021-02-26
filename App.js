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
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return <NavigationStack />;
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    height: 500,
    width: 500,
    backgroundColor: Colors.green,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

// {/*<ScrollView*/}
// {/*  contentInsetAdjustmentBehavior="automatic"*/}
// {/*  style={styles.scrollView}>*/}
// {/*  <Header />*/}
// {/*  {global.HermesInternal == null ? null : (*/}
// {/*    <View style={styles.engine}>*/}
// {/*      <Text style={styles.footer}>Engine: Hermes</Text>*/}
// {/*    </View>*/}
// {/*  )}*/}
