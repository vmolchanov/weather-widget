import {getFullUrl} from '@/utils/url';
import type {IWeatherData, IRawWeatherData} from '@/types/weather';

const url: string = 'https://api.openweathermap.org/data/2.5/weather';
const key: string = 'c3bfba10f7d87bad7bbb00d108a76b9e';

const getWeatherByUrl = async (url: string) => {
  const response: Response = await fetch(url);

  const data: IRawWeatherData = await response.json();

  return <IWeatherData>{
    feelsLike: data.main.feels_like,
    windSpeed: data.wind.speed,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    city: data.name,
    mainInfo: data.weather[0].main,
    description: data.weather[0].description,
    country: data.sys.country,
    currentTemperature: data.main.temp,
    icon: data.weather[0].icon,
  };
};

export const getWeatherDataByLonLat = async (lat: number, lon: number) => {
  const fullUrl = getFullUrl(url, {
    lat: lat.toString(),
    lon: lon.toString(),
    appid: key,
  });

  return getWeatherByUrl(fullUrl);
};

export const getWeatherDataByCity = async (city: string) => {
  const fullUrl = getFullUrl(url, {
    q: city,
    appid: key,
  });

  return getWeatherByUrl(fullUrl);
};
