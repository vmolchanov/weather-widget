import {defineComponent, shallowRef} from 'vue';
import {componentsMap} from '@/router';
import {EComponent} from '@/enums/component';
import emitter from '@/event-bus';

export default defineComponent({
  name: 'app',
  created() {
    emitter.on('change-scene', (component: EComponent) => {
      this.component = componentsMap[component];
    });
  },
  data() {
    return {
      component: shallowRef(componentsMap[EComponent.WeatherMain]),
    };
  },
});
