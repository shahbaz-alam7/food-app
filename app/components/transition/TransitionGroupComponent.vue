<template>
  <button
    @click="addItem"
    class="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
  >
    Add Item
  </button>

  <TransitionGroup
    tag="ul"
    class="space-y-2"
    enter-active-class="transition-all duration-500 ease-in-out"
    leave-active-class="transition-all duration-500 ease-in-out"
    enter-from-class="opacity-0 -translate-y-5"
    leave-to-class="opacity-0 translate-y-5"
  >
    <li
      v-for="item in items"
      :key="item"
      class="p-3 bg-gray-100 rounded-md shadow-md"
    >
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<script setup>
import { ref } from "vue";

const items = ref([]);

const addItem = () => {
  items.value.push(`Item ${items.value.length + 1}`);
};
</script>
