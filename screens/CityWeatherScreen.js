import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteName} from '../utility/Routes';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.route.params.weatherDetails || [];

    // this.data = [
    //   {
    //     feelsLike: 277.3,
    //     temp: 274.1,
    //     weather: 'Clear',
    //     weatherDescription: 'clear sky',
    //   },
    //   {
    //     feelsLike: 278.91,
    //     temp: 275.94,
    //     weather: 'Clear',
    //     weatherDescription: 'clear sky',
    //   },
    //   {
    //     feelsLike: 282.92,
    //     temp: 279.9,
    //     weather: 'Clear',
    //     weatherDescription: 'clear sky',
    //   },
    // ];
  }

  onPress = (details) => {
    const {navigation} = this.props;
    navigation.navigate(RouteName.WeatherDetailsScreen, {
      details: details,
    });
  };

  Item = (details) => (
    <TouchableOpacity onPress={() => this.onPress(details)} style={styles.item}>
      <View style={styles.cell}>
        <Text style={styles.heading}>{details.weather}</Text>
        <Text style={styles.title}>Temp: {details.temp}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.data}
          renderItem={({item}) => {
            return this.Item(item);
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  cell: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    backgroundColor: '#eee9ee',
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 15,
  },
  title: {
    fontSize: 14,
  },
});
