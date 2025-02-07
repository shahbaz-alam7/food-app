export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.directive("highlight", {
      mounted(el, binding) {
        el.style.color = binding.value || "red";
      },
    });
  }
});
