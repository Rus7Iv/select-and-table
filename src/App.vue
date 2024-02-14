<template>
  <div class="container">
    <Select :items="options" placeholder="Выберите животное" />
    <Table :data="tableData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Select from './components/Select.vue';
import Table from './components/Table.vue';

interface Item {
  id: number;
  title: string;
}

interface TableData {
  id: number;
  number: number;
  developer: string;
  deadline: string;
  type: string;
  floor: number;
  square: number;
}

export default defineComponent({
  name: 'App',
  components: {
    Select,
    Table
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
      tableData: [
        { id: 1, number: 421, developer: 'PRINZIP', deadline: '2005-08-09T18:31:42', type: 'Студия', floor: 2, square: 100.3 },
        { id: 2, number: 73, developer: 'Брусника', deadline: '2005-08-09T18:31:42', type: '2-к', floor: 2, square: 10.3 },
        { id: 3, number: 122, developer: 'TEN', deadline: '2005-08-09T18:31:42', type: '3-к', floor: 2, square: 103 },
        { id: 4, number: 1, developer: 'PRINZIP', deadline: '2005-08-09T18:31:42', type: 'Студия', floor: 2, square: 100.3 },
        { id: 5, number: 72, developer: 'Брусника', deadline: '2005-08-09T18:31:42', type: '2-к', floor: 2, square: 10.3 },
        { id: 6, number: 23, developer: 'TEN', deadline: '2005-08-09T18:31:42', type: '3-к', floor: 2, square: 103 },
        { id: 7, number: 5, developer: 'PRINZIP', deadline: '2005-08-09T18:31:42', type: 'Студия', floor: 2, square: 100.3 },
        { id: 8, number: 2, developer: 'Брусника', deadline: '2005-08-09T18:31:42', type: '2-к', floor: 2, square: 10.3 },
        { id: 9, number: 97, developer: 'TEN', deadline: '2005-08-09T18:31:42', type: '3-к', floor: 2, square: 103 },
        { id: 10, number: 34, developer: 'PRINZIP', deadline: '2005-08-09T18:31:42', type: 'Студия', floor: 2, square: 100.3 },
        { id: 11, number: 1, developer: 'Брусника', deadline: '2005-08-09T18:31:42', type: '2-к', floor: 2, square: 10.3 },
        { id: 12, number: 88, developer: 'TEN', deadline: '2005-08-09T18:31:42', type: '3-к', floor: 2, square: 103 }
      ] as TableData[],
    };
  },
});
</script>

<style scoped>
.container > * {
  margin-bottom: 30px;
}
</style>
