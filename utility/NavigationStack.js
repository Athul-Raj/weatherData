import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteName} from './Routes';
import {CityWeatherScreen, HomeScreen, WeatherDetailsScreen} from '../screens';

const Stack = createStackNavigator();

export function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RouteName.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={RouteName.CityWeatherScreen}
          component={CityWeatherScreen}
        />
        <Stack.Screen
          name={RouteName.WeatherDetailsScreen}
          component={WeatherDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
