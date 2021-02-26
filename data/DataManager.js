import {ResponseSuccessModel} from './models/basemodel/ResponseSuccessModel';
import {Main, Weather, WeatherDetails} from './models/WeatherDetails';

function parseWeatherResponse(resp: ResponseSuccessModel): WeatherDetails[] {
  return resp.data.map((R) => {
    // const weathers: [Weather] = R.weather.map((singleWeather) => {
    //   return {
    //     name: singleWeather.main || '',
    //     description: singleWeather.description || '',
    //   };
    // });

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

export default {parseWeatherResponse};
