<template>
  <div class="dropdown" :class="{ 'dropdown--open': isOpen }" @click="toggleOpen">
    <div class="dropdown__selected" :class="{ 'dropdown__selected--open': isOpen }">
      <span class="dropdown__placeholder" :class="{ 'dropdown__placeholder--selected': selected }">{{ placeholder }}</span>
      <span v-if="selected" class="dropdown__value">{{ selected.title }}</span>
      <img class="dropdown__arrow" src="../assets/arrowSelect.svg" alt="arrow" />
    </div>
    <transition name="fade">
      <ul v-if="isOpen" class="dropdown__list">
        <li v-for="item in items" :key="item.id" :value="item.id" @click.stop="selectItem(item)" class="dropdown__item">
          {{ item.title }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

interface Item {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'Dropdown',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const selected = ref<Item | null>(null);

    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const selectItem = (item: Item) => {
      selected.value = item;
      isOpen.value = false;
    };

    return {
      isOpen,
      selected,
      toggleOpen,
      selectItem,
    };
  },
});
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 200px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown:hover {
  box-shadow: none;
  border: 1px solid #F968bf;
}

.dropdown--open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: none;
  border: 1px solid #F968bf;
}

.dropdown__selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.dropdown__selected--open .dropdown__arrow {
  transform: rotate(180deg);
}

.dropdown__placeholder {
  transition: all 0.3s ease;
  color: rgba(41, 39, 125, 0.40);
  font-size: 14px;
  font-weight: 500;
}

.dropdown__placeholder--selected {
  font-size: 14px;
  transform: translateY(-20px);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
}

.dropdown__value {
  position: absolute;
  left: 10px;
  color: #29277d;
}

.dropdown__arrow {
  transition: all 0.3s ease;
  fill: #5F88F4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dropdown__list {
  position: absolute;
  width: 100%;
  left: -1px;
  border: 1px solid #F968bf;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  z-index: 1;
}

.dropdown__item {
  padding: 10px;
  cursor: pointer;
  color: #29277d;
}

.dropdown__item:hover {
  background-color: #DADEFE;
}
</style>
