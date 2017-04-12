import axios from 'axios';

const API_KEY = 'b9aa0325d3855e3ec9f06b17200f1b4e';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = API_URL + '&q=' + city + ',br';
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
