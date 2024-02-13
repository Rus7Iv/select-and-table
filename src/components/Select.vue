<template>
    <div class="select">
      <div class="select__header" @click="isOpen = !isOpen">
        <span class="select__current">{{ modelValue?.title || 'Выберите' }}</span>
        <img class="select__icon" :class="{ 'select__icon--open': isOpen }" src="../assets/arrowSelect.svg" alt="arrow" />
      </div>
      <div class="select__body" v-if="isOpen">
        <div class="select__item" v-for="option in options" :key="option.id" @click="selectItem(option)">
          {{ option.title }}
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType } from 'vue';
  
  interface Option {
    id: number;
    title: string;
  }
  
  export default defineComponent({
    name: 'Select',
    props: {
      options: {
        type: Array as PropType<Option[]>,
        required: true
      },
      modelValue: {
        type: Object as PropType<Option | null>,
        default: null
      }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const isOpen = ref(false);
  
      const selectItem = (item: Option) => {
        emit('update:modelValue', item);
        isOpen.value = false;
      };
  
      return {
        isOpen,
        selectItem,
        modelValue: props.modelValue
      };
    }
  });
  </script>
  
  <style scoped>
  .select {
    position: relative;
    width: 200px;
    border: 1px solid #F968bf;
    border-radius: 5px;
    font-size: 16px;
    color: #29277d;
  }
  
  .select__header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
  }
  
  .select__icon {
    transition: transform 0.3s ease;
  }
  
  .select__icon--open {
    transform: rotate(180deg);
  }
  
  .select__body {
    position: absolute;
    width: 100%;
    border: 1px solid #F968bf;
    border-top: none;
    border-radius: 0 0 5px 5px;
    background-color: #fff;
    z-index: 1;
  }
  
  .select__item {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .select__item:hover {
    background-color: #DADEFE;
  }
  </style>
  