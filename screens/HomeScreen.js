import React from 'react';

import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {RouteName} from '../utility/Routes';
import API from '../data/WebService';
import ErrorAlert from './components/ErrorAlert';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      lookUpButtonDisabled: true,
      showLoader: false,
      showError: false,
    };
  }

  onChangeText = (text) => {
    this.setState({
      cityName: text,
      lookUpButtonDisabled: text.length <= 0,
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
      .catch(() => {
        this.isLoaderVisible(false);
        this.isAlertVisible(true);
      });
  };

  isAlertVisible = (showAlert) => {
    this.setState({
      showError: showAlert,
    });
  };

  render() {
    const {navigation} = this.props;
    const {cityName, showLoader, showError, lookUpButtonDisabled} = this.state;

    return (
      <View style={styles.container}>
        {showLoader && <ActivityIndicator size="large" color="black" />}
        {showError && (
          <ErrorAlert
            message={'Please retry with different City Name'}
            hideSelf={() => this.isAlertVisible(false)}
          />
        )}

        <TextInput
          style={styles.cityTextInput}
          onChangeText={(text) => this.onChangeText(text)}
          value={cityName}
          placeholder={'Enter City Name'}
        />
        <Button
          title="Look Up"
          onPress={() => this.onLookUpClicked(navigation, cityName)}
          disabled={lookUpButtonDisabled}
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
