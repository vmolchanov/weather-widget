import {defineComponent, PropType} from 'vue';
import {tempFromKelvinsToDegreesCelsius} from '@/utils/convert';

export default defineComponent({
  name: 'weather-card',
  props: {
    currentTemperature: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    city: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    country: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    feelsLike: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    mainInfo: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    description: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    windSpeed: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    pressure: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    humidity: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    visibility: {
      type: Number as PropType<number | undefined>,
      default: undefined,
    },
    icon: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
  },
  computed: {
    getDescriptionText(): string {
      const info = [];

      if (this.feelsLike) {
        info.push(`Feels like ${tempFromKelvinsToDegreesCelsius(this.feelsLike)}°C`);
      }
      if (this.mainInfo) {
        info.push(this.mainInfo);
      }
      if (this.description) {
        info.push(this.description);
      }

      return info.join('. ');
    },
    getHeaderText(): string {
      let text = '';

      if (this.city) {
        text += `${this.city}`;
      }

      if (this.country) {
        if (text.length !== 0) {
          text += `, `;
        }
        text += this.country;
      }

      if (text.length === 0) {
        text = '-';
      }

      return text;
    },
    getIconStyle() {
      return {
        backgroundImage: `url(http://openweathermap.org/img/wn/${this.icon}@2x.png)`,
      };
    },
    getCurrentTemperature(): string {
      return this.currentTemperature
        ? `${tempFromKelvinsToDegreesCelsius(this.currentTemperature)}°C`
        : '-';
    },
    getWindSpeed(): string {
      return this.windSpeed ? `${this.windSpeed.toFixed(1)}m/s` : '-';
    },
    getPressure(): string {
      return this.pressure ? `${Math.round(this.pressure)}hPa` : '-';
    },
    getHumidity(): string {
      return `Humidity: ${this.humidity ?? '-'}%`;
    },
    getVisibility(): string {
      return `Visibility: ${this.visibility ? (this.visibility / 1000).toFixed(1) : '-'}km`;
    },
  },
});
