<template>
  <div>
    <Select :items="options" placeholder="Выберите животное" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Select from './components/Select.vue';

interface Item {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'App',
  components: {
    Select
},
  data() {
    return {
      options: [
        { id: 1, title: 'Слон' },
        { id: 2, title: 'Бегемот' },
        { id: 3, title: 'Зебра' },
        { id: 4, title: 'Жираф' },
        { id: 5, title: 'Лев' },
      ] as Item[],
    };
  },
});
</script>
