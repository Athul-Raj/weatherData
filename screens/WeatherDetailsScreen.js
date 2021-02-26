import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type WeatherDetails = {
  temp: string,
  feelsLike: string,
  weatherDescription: string,
  description: string,
};

export default function WeatherDetailsScreen({route}) {
  const weatherDetails: WeatherDetails = route.params.details;

  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>{weatherDetails.temp}</Text>
      <Text style={styles.feelsLikeTitle}>
        FeelsLike: {weatherDetails.feelsLike}
      </Text>
      <Text style={styles.weatherTitle}>{weatherDetails.weather}</Text>
      <Text style={styles.weatherDescription}>
        {weatherDetails.weatherDescription}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', margin: 20},
  item: {
    backgroundColor: '#d7cfd7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  headingTitle: {
    fontWeight: 'bold',
    fontSize: 100,
  },
  feelsLikeTitle: {fontSize: 18, alignSelf: 'flex-end', marginTop: 20},
  weatherTitle: {fontSize: 22, alignSelf: 'flex-start', marginTop: 5},
  weatherDescription: {fontSize: 18, alignSelf: 'flex-start', marginTop: 5},
});
