// const axios = require('axios');

import axios from 'axios';
import {ResponseErrorModel} from './models/basemodel/ResponseErrorModel';
import {ResponseSuccessModel} from './models/basemodel/ResponseSuccessModel';

import DataManager from '../data/DataManager';

const API_KEY = '8defe581b561d6753674ff1c281b51a8';

export default class API {
  static parseServerError(e: {} | string): string {
    if (typeof e !== 'object' && e === 'Network Error') {
      return 'NetworkError';
    } else {
      return 'Unknown Error';
    }
  }

  static async getWeatherForCity(city) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
      )
      .then((response) => {
        if (response.data.cod === '200') {
          const responseObj = new ResponseSuccessModel(
            response.status,
            response.data.list,
          );
          return DataManager.parseWeatherResponse(responseObj);
        } else {
          throw new ResponseErrorModel('00', 'CityInvalid');
        }
      })
      .catch((err) => {
        console.warn('Network issue', err);
        API.parseServerError(err);
        throw {
          code: err.code || '00',
          message: 'Some issue',
        };
      });
  }
}
