<template lang="">
  <div ref="el" class="w-full h-full">>
    
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-10"
    >
      <div v-for="image in images" :key="image.id">
        <ImageCard :image="image" :favorites="favorites" />
      </div>
    </div>
    <div v-if="loading" class="flex items-center justify-center py-10">
      <svg
        class="animate-spin -ml-1 mr-3 h-14 w-14 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div v-if="error" class="flex items-center justify-center py-10">
      <p class="text-red-500">An error occured try refreshing the page</p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import { ImageCard } from "../components/gallery";

// const el = ref(null);

// const { reset } = useInfiniteScroll(
//   el,
//   () => {
//     store.dispatch("getImages", { query: "nature" });
//   },
//   {
//     distance: 20,
//   }
// );

// function resetList() {
//   store.state.images = [];
//   reset();
// }

const store = useStore();

const favorites = computed(() => {
  return store.state.favorites;
});


onMounted(() => {
  store.dispatch("getImages", { query: "nature" });
  if (localStorage.getItem("favorites")) {    
    store.state.favorites = JSON.parse(localStorage.getItem("favorites"));
  }
});

const loading = computed(() => {
  return store.state.loading;
});

const error = computed(() => {
  return store.state.error;
});
const images = computed(() => {
  return store.state.images;
});
</script>
<style lang=""></style>
