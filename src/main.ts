import {defineCustomElement} from 'vue';
import App from './App.ce.vue';

import {StorageService} from './services/storage-service';
import {WeatherStorageService} from './services/weather-storage-service';

new WeatherStorageService(StorageService);

const AppElement = defineCustomElement(App);
customElements.define('weather-widget', AppElement);
