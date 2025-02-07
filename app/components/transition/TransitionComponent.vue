<template>
  <button
    @click="show = !show"
    class="bg-blue-500 text-white px-4 py-2 rounded-md"
  >
    Toggle
  </button>

  <Transition name="fade">
    <p v-if="show" class="mt-4 p-4 bg-gray-100 rounded-md">
      Hello, I'm animated!
    </p>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<style>
/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
