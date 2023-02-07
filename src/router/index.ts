import WeatherMain from '@/scenes/weather-main/weather-main.vue';
import WeatherSettings from '@/scenes/weather-settings/weather-settings.vue';

import {EComponent} from '@/enums/component';

export const componentsMap = {
  [EComponent.WeatherMain]: WeatherMain,
  [EComponent.WeatherSettings]: WeatherSettings,
};
