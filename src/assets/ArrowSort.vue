<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 6 5" 
    >
      <path
        opacity="0.3"
        d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
        stroke="#29277D"
        :fill="isCurrentColumn && isAscending ? '#29277D' : 'none'"
        stroke-linejoin="round"
      />
    </svg>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Arrow',
    props: {
      isCurrentColumn: {
        type: Boolean,
        required: true,
      },
      isAscending: {
        type: Boolean,
        required: true,
      },
    },
  });
  </script>
  