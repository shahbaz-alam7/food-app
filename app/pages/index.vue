<script setup>
import { ref, watch } from "vue";

const config = useRuntimeConfig();
const apiBaseUrl = config.public.NUXT_API_BASE_URL;
const page = ref(1);
const email = ref("");
const limit = 10;

const queryParams = computed(() => ({
  limit,
  page: page.value,
}));

// with backend
// const { data, error, refresh } = useFetch(() => `${apiBaseUrl}/recipes`, {
//   query: queryParams,
//   watch: false,
// });

// with server folder
const { data, error, refresh } = useFetch(() => "/api/recipes", {
  query: queryParams,
  watch: false,
});

watch(page, () => {
  refresh();
});

const selectPage = (selectedPage) => {
  page.value = selectedPage;
};
const next = () => {
  if (page.value < data._rawValue?.totalPages) {
    page.value++;
  }
};
const previous = () => {
  if (page.value > 1) page.value--;
};

const handleSubscribe = () => {
  console.log(email.value);
};
useSeoMeta({
  title: "Food Court",
});
const vFocus = {
  mounted(el) {
    el.focus(); // Auto-focus on element
  },
};
</script>

<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <UButton color="primary" to="#recipes" label="Browse Recipes" />
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:667px"
            src="/hero.webp"
            format="webp"
            densities="x1"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="recipes" class="py-20 container">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <div
        v-if="!error"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8"
      >
        <RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
      </div>
      <p v-else class="text-xl">
        Opps, something went wrong. Please try again later
      </p>
      <div class="flex justify-center items-center my-4">
        <UIcon
          name="mdi:arrow-left-drop-circle"
          class="text-3xl text-green-500 hover:text-green-700 cursor-pointer"
          @click="previous"
        />
        <button
          v-for="pageNo in data?.totalPages"
          :key="pageNo"
          :class="[
            'mx-2 w-8 h-8 border',
            pageNo === page ? 'bg-green-600' : 'bg-gray-600',
          ]"
          @click="selectPage(pageNo)"
        >
          {{ pageNo }}
        </button>
        <UIcon
          name="mdi:arrow-right-drop-circle"
          :class="[
            'text-3xl text-green-500 hover:text-green-700',
            pageNo == data?.totalPages
              ? 'cursor-not-allowed'
              : 'cursor-pointer',
          ]"
          @click="next"
        />
      </div>
    </section>
    <section class="py-5 bg-[#f1f1f1] border flex justify-center">
      <input
        v-model="email"
        placeholder="Enter Your Email"
        class="p-1"
        v-focus
      />
      <button
        class="bg-green-500 px-4 text-white hover:bg-green-600"
        @click="handleSubscribe"
      >
        Subscribe
      </button>
      <p>{{ rec }}</p>

      <!-- <p v-highlight="'blue'">This text will be blue</p>
      <p v-highlight>This text will be red (default)</p> -->
    </section>
  </main>
</template>
