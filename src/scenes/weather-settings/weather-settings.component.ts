import {defineComponent, shallowRef} from 'vue';

import type {IDraggableListItem} from '@/types/draggable-list';
import type {IWeatherData} from '@/types/weather';

import CrossIcon from '@/assets/cross.svg';
import EnterIcon from '@/assets/enter.svg';

import WeatherDraggableList from '@components/weather-draggable-list/weather-draggable-list.vue';
import WeatherAddLocationForm from '@components/weather-add-location-form/weather-add-location-form.vue';

import {EComponent} from '@/enums/component';
import {getWeatherDataByCity} from '@/services/weather-service';
import {WeatherStorageService} from '@/services/weather-storage-service';
import emitter from '@/event-bus';

export default defineComponent({
  name: 'weather-settings',
  components: {
    WeatherAddLocationForm,
    WeatherDraggableList,
  },
  created() {
    this.updateCities();
  },
  data() {
    return {
      cities: [] as IDraggableListItem[],
      CrossIcon: shallowRef(CrossIcon),
      EnterIcon: shallowRef(EnterIcon),
      weatherStorageService: shallowRef(new WeatherStorageService()) as WeatherStorageService,
    }
  },
  methods: {
    onCloseClick(): void {
      emitter.emit('change-scene', EComponent.WeatherMain);
    },
    updateCities(): void {
      const cities: string[] = this.weatherStorageService.getCities();

      this.cities = cities.map((city: string, i: number) => ({
        name: city,
        id: i,
      }));
    },
    async onAddCity(city: string): Promise<void> {
      try {
        const cityData: IWeatherData = await getWeatherDataByCity(city);

        this.weatherStorageService.addCity(cityData.city);

        this.updateCities();

        this.$refs.weatherAddLocationFormRef.resetForm();
      } catch {
        this.$refs.weatherAddLocationFormRef.setErrorMessage('City not found');
      }
    },
    onRemoveClick(city: IDraggableListItem): void {
      this.weatherStorageService.removeCity(city.name);
      this.updateCities();
    },
    onMoveCities(cities: IDraggableListItem[]): void {
      this.weatherStorageService.clear();
      cities.forEach(city => {
        this.weatherStorageService.addCity(city.name);
      });
    },
  },
});
