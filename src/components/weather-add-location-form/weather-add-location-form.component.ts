import {defineComponent, shallowRef} from 'vue';
import EnterIcon from '@/assets/enter.svg';

export default defineComponent({
  name: 'weather-add-location-form',
  emits: ['add-city'],
  data() {
    return {
      EnterIcon: shallowRef(EnterIcon),
      city: '',
      errorMessage: '',
    };
  },
  methods: {
    onFormSubmit(): void {
      this.$emit('add-city', this.city);
    },
    resetForm(): void {
      this.city = '';
    },
    setErrorMessage(errorMessage: string): void {
      this.errorMessage = errorMessage;
    },
  },
  watch: {
    city() {
      this.errorMessage = '';
    },
  },
});
