import React from 'react';

import {
  Button,
  StyleSheet,
  ActivityIndicator,
  View,
  TextInput,
} from 'react-native';
import {RouteName} from '../utility/Routes';
import API from '../data/WebService';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      showLoader: false,
      showError: false,
    };
  }

  onChangeText = (text) => {
    this.setState({
      cityName: text,
    });
  };

  isLoaderVisible = (showLoader) => {
    this.setState({
      showLoader: showLoader,
    });
  };

  onLookUpClicked = async (navigation, cityName) => {
    this.isLoaderVisible(true);
    API.getWeatherForCity(cityName)
      .then((response) => {
        this.isLoaderVisible(false);
        navigation.navigate(RouteName.CityWeatherScreen, {
          weatherDetails: response,
        });
      })
      .catch((err) => {
        //     todo show alert
        console.warn('UI: ERRRR', err);
        this.isLoaderVisible(false);
      });
  };

  render() {
    const {navigation} = this.props;
    const {cityName, showLoader, showError} = this.state;

    return (
      <View style={styles.container}>
        {showLoader && <ActivityIndicator size="large" color="black" />}
        <TextInput
          style={styles.cityTextInput}
          onChangeText={(text) => this.onChangeText(text)}
          value={cityName}
          placeholder={'Enter City Name'}
        />
        <Button
          title="Look Up"
          onPress={() => this.onLookUpClicked(navigation, cityName)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  cityTextInput: {
    padding: 5,
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
