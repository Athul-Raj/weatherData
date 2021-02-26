export class WeatherDetails {
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
