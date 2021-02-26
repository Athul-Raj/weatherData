export class WeatherDetails {
  // weathers: Weather;
  // main: Main;
  weather: string;
  weatherDescription: string;
  feelsLike: string;
  temp: string;

  constructor(
    weather: string,
    weatherDescription: string,
    feelsLike: string,
    temp: string,
  ) {
    // this.weathers = weathers;
    // this.main = main;
    this.weather = weather;
    this.weatherDescription = weatherDescription;
    this.feelsLike = feelsLike;
    this.temp = temp;
  }
}

export type Weather = {
  name: string,
  description: string,
};

export type Main = {
  feelsLike: string,
  temp: string,
  maxTemp: string,
  pressure: string,
};
