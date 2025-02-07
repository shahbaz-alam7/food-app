<script setup>
const config = useRuntimeConfig();
const apiBaseUrl = config.public.NUXT_API_BASE_URL;
const routes = useRoute();
const recipeId = routes.params.id;
console.log("recipeId:", recipeId)

// const { data, pending, error } = useFetch(`${apiBaseUrl}/recipe/${recipeId}`);
const { data, pending, error } = useFetch(`/api/recipe/${recipeId}`);
console.log("error:", error)
</script>


<template>
  <section class="bg-[#f1f1f1]">
    <div
      class="container flex flex-col justify-center items-center py-20 gap-5"
    >
      <div id="header">
        <p class="text-xl lg:text-2xl font-semibold mb-2">{{ data.name }}</p>
        <div
          class="font-normal w-full flex gap-8 text-lg lg:text-xl mb-4 mt-auto"
        >
          <div class="flex items-center gap-1">
            <UIcon
              name="i-mdi-clock-time-eight-outline"
              class="text-green-500"
            />
            <span>{{ data.cookTimeMinutes }}</span>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="i-mdi-fire" class="text-dodgeroll-gold-600" />
            <span>{{ data.caloriesPerServing }}</span>
          </div>

          <div class="flex items-center gap-1">
            <UIcon name="i-mdi-star" class="text-blue-500" />
            <span>{{ data.rating }} ({{ data.reviewCount }})</span>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="mdi:food-fork-drink" class="text-dodgeroll-gold-500" />
            <span>{{ data.servings }} </span>
          </div>
        </div>
        <div>
          <NuxtImg
            :src="data.image"
            width="500"
            height="250"
            class="border rounded-md shadow-md"
          />
        </div>
      </div>
      <div id="recipe-body" class="w-full p-20">
        <div class="mb-8">
          <h2 class="text-3xl font-semibold mb-4">Ingredients List</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
            <li class="ml-2" v-for="ingredient in data.ingredients">
              <UIcon name="mdi:check-bold" class="text-green-500" />
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-3xl font-medium mb-4">Instructions</h2>
          <ul class="flex flex-col text-lg gap-4">
            <li class="ml-2" v-for="instruction in data.instructions">
              {{ instruction }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
