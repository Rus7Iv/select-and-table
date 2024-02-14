<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" @click="sortTable(column)">
            {{ column }}
            <img class="arrow" :class="{ active: currentSort.column === column, asc: currentSort.ascending }" src="../assets/arrowSort.svg" alt="arrow" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedData" :key="index">
          <td v-for="column in columns" :key="column">{{ row[column] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';

interface Data {
  [key: string]: number | string;
  id: number;
  number: number;
  developer: string;
  deadline: string;
  type: string;
  floor: number;
  square: number;
}

export default defineComponent({
  name: 'SortableTable',
  props: {
    data: {
      type: Array as PropType<Data[]>,
      required: true,
    },
  },
  setup(props) {
    const columns = ['number', 'developer', 'deadline', 'type', 'floor', 'square'];
    const currentSort = ref({ column: '', ascending: true });

    const sortTable = (column: string) => {
      if (currentSort.value.column === column) {
        currentSort.value.ascending = !currentSort.value.ascending;
      } else {
        currentSort.value.column = column;
        currentSort.value.ascending = true;
      }
    };

    const sortedData = computed(() => {
      const sortFunction = (a: Data, b: Data) => {
        if (a[currentSort.value.column] < b[currentSort.value.column]) return currentSort.value.ascending ? -1 : 1;
        if (a[currentSort.value.column] > b[currentSort.value.column]) return currentSort.value.ascending ? 1 : -1;
        return 0;
      };
      return props.data.slice().sort(sortFunction);
    });

    return { columns, currentSort, sortTable, sortedData };
  },
});
</script>

<style scoped>
.table-container {
  max-height: 600px;
  overflow-y: auto;
  position: relative;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  position: sticky;
  top: 0;
  background-color: white;
}

th {
  cursor: pointer;
}
.arrow {
  transition: transform 0.3s ease-in-out;
}
.arrow.active {
  fill: #29277d;
}
</style>
