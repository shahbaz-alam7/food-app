<template>
  <button
    @click="activeTab = 'A'"
    class="m-2 p-2 bg-blue-500 text-white rounded-md"
  >
    Show Tab A
  </button>
  <button
    @click="activeTab = 'B'"
    class="m-2 p-2 bg-green-500 text-white rounded-md"
  >
    Show Tab B
  </button>

  <KeepAlive>
    <component :is="activeComponent" />
  </KeepAlive>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const activeTab = ref("A");

const activeComponent = computed(() => (activeTab.value === "A" ? TabA : TabB));

const TabA = defineAsyncComponent(() => import("@/components/TabA.vue"));
const TabB = defineAsyncComponent(() => import("@/components/TabB.vue"));
</script>
