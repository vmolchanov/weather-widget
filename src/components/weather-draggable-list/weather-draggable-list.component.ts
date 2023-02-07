import {defineComponent, shallowRef} from 'vue';
import draggable from 'vuedraggable';
import BurgerIcon from '@/assets/burger.svg';
import BasketIcon from '@/assets/basket.svg';

export default defineComponent({
  name: 'weather-draggable-list',
  components: {
    draggable,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ['move', 'remove'],
  data() {
    return {
      drag: false,
      enabled: true,
      BurgerIcon: shallowRef(BurgerIcon),
      BasketIcon: shallowRef(BasketIcon),
    };
  },
  methods: {
    onMove() {
      this.$emit('move', this.list);
    },
    onRemoveClick(element: object) {
      this.$emit('remove', element);
    },
  },
});
