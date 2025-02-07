<template>
  <div class="font-Montserrat">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
