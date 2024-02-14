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
import { options, tableData } from './data';

export default defineComponent({
  name: 'App',
  components: {
    Select,
    Table
  },
  data() {
    return {
      options,
      tableData,
    };
  },
});
</script>

<style scoped>
.container > * {
  margin-bottom: 30px;
}
</style>