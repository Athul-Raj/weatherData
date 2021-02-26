import {ResponseSuccessModel} from './models/basemodel/ResponseSuccessModel';
import {Main, Weather, WeatherDetails} from './models/WeatherDetails';

import RemoteManager from './remote/RemoteManager';

export default class DataManager {
  constructor() {
    this.remoteManager = new RemoteManager();
  }

  getWeatherDetailsOfCity = async (city) => {
    return this.remoteManager
      .getWeatherForCity(city)
      .then((response) => {
        return this._parseWeatherResponse(response);
      })
      .catch((err) => {
        throw err;
      });
  };

  _parseWeatherResponse(resp: ResponseSuccessModel): WeatherDetails[] {
    return resp.data.map((R) => {
      const weathers: Weather = {
        name: R.weather[0].main || '',
        description: R.weather[0].description || '',
      };

      const main: Main = {
        feelsLike: R.main.feels_like || '',
        temp: R.main.temp || '',
        maxTemp: R.main.temp_max || '',
        pressure: R.main.pressure || '',
      };
      return new WeatherDetails(
        weathers.name,
        weathers.description,
        main.temp,
        main.feelsLike,
      );
    });
  }

  static _convertFtoC(tempInF: string): string {
    const F = parseFloat(tempInF || 0);
    return (5 / 9) * (F - 32);
  }
}
