import axios from 'axios';

export default class Remote {
  static GET(url) {
    return axios.get(url);
  }
}
