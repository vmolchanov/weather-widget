import {defineComponent, shallowRef} from 'vue';

import type {IWeatherData} from '@/types/weather';

import SettingsIcon from '@/assets/settings.svg';

import emitter from '@/event-bus';
import {getWeatherDataByCity, getWeatherDataByLonLat} from '@/services/weather-service';
import {WeatherStorageService} from '@/services/weather-storage-service';
import WeatherCard from '@components/weather-card/weather-card.vue';
import {EComponent} from '@/enums/component';

export default defineComponent({
  name: 'weather-main',
  components: {
    WeatherCard,
  },
  created() {
    this.initCities();
  },
  data() {
    return {
      weatherData: [] as IWeatherData[],
      SettingsIcon: shallowRef(SettingsIcon),
      weatherStorageService: shallowRef(new WeatherStorageService()) as WeatherStorageService,

      isLoaderShown: true,
      isErrorMessageShown: false,
    };
  },
  methods: {
    onSettingsClick() {
      emitter.emit('change-scene', EComponent.WeatherSettings);
    },
    async initCities() {
      const cities: string[] = this.weatherStorageService.getCities();

      if (cities.length === 0) {
        await this.initWeatherDataByCurrentGeolocation();
      } else {
        this.weatherData = await Promise.all(cities.map(city => getWeatherDataByCity(city)));
      }

      this.isLoaderShown = false;
    },

    async initWeatherDataByCurrentGeolocation() {
      const onSuccess = async (position: GeolocationPosition) => {
        const {latitude, longitude} = position.coords;
        const weatherData: IWeatherData = await getWeatherDataByLonLat(latitude, longitude);

        this.weatherData.push(weatherData);
      };
      const onError = () => {
        this.isErrorMessageShown = true;
      };
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  },
});
