import { ref, computed } from 'vue';
import { ITableData } from './interfaces';

export default function useSort(data: ITableData[]) {
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
    const sortFunction = (a: ITableData, b: ITableData) => {
      if (a[currentSort.value.column] < b[currentSort.value.column]) return currentSort.value.ascending ? -1 : 1;
      if (a[currentSort.value.column] > b[currentSort.value.column]) return currentSort.value.ascending ? 1 : -1;
      return 0;
    };
    return data.slice().sort(sortFunction);
  });

  return { currentSort, sortTable, sortedData };
}
