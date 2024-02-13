<template>
  <div id="app">
    <Select :options="options" v-model="selected" />
    <p>Выбранное значение: {{ selected ? selected.title : 'Ничего не выбрано' }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Select from './components/Select.vue';

interface Option {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'App',
  components: {
    Select
  },
  setup() {
    const options: Option[] = [
      { id: 1, title: 'Слон' },
      { id: 2, title: 'Бегемот' },
      { id: 3, title: 'Зебра' },
      { id: 4, title: 'Жираф' },
      { id: 5, title: 'Лев' }
    ];
    const selected = ref<Option | null>(null);

    return {
      options,
      selected
    };
  }
});
</script>
