export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IRawWeatherData {
  coord: ICoord;
  weather: IWeather;
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherData {
  feelsLike: number;
  windSpeed: number;
  pressure: number;
  humidity: number;
  visibility: number;
  city: string;
  country: string;
  mainInfo: string;
  description: string;
  currentTemperature: number;
  icon: string;
}
