import axios from 'axios';

const API_KEY = 'f5102bb71b7b9d2ebb0bf82b8a236d5b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
