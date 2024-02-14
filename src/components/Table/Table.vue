<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" @click="sortTable(column)">
            {{ column }}
            <Arrow :isCurrentColumn="currentSort.column === column" :isAscending="currentSort.ascending" />
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
import { defineComponent, PropType } from 'vue';
import Arrow from '../../assets/ArrowSort.vue';
import useSort from './useSort';
import { ITableData } from './interfaces';

const columns = ['number', 'developer', 'deadline', 'type', 'floor', 'square'];

export default defineComponent({
  name: 'SortableTable',
  components: {
    Arrow,
  },
  props: {
    data: {
      type: Array as PropType<ITableData[]>,
      required: true,
    },
  },
  setup(props) {
    const { currentSort, sortTable, sortedData } = useSort(props.data);

    return { columns, currentSort, sortTable, sortedData };
  },
});
</script>

<style scoped>
.table-container {
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
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

td {
  text-align: center;
}

.arrow-active {
  fill: #29277d;
}
</style>
