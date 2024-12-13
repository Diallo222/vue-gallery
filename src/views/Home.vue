<template lang="">
  <div class="w-full h-full pb-20">
    <Search />
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6"
    >
      <!-- Image cards -->
      <div v-for="image in images" :key="image.id">
        <ImageCard :image="image" :favorites="favorites" />
      </div>
    </div>
     <!-- Loader -->
    <Loader :loading="loading" />
    <!-- Load more button -->
    <button
      v-if="!loading && images.length > 0"
      class="mx-auto block my-10"
      @click="getMoreImages"
    >
      Load more
    </button>
     <!--If there are No results -->
    <div
      v-if="!error && images.length === 0 && !loading"
      class="flex items-center justify-center py-10"
    >
      <p class="text-2xl text-black">No results found</p>
    </div>
    <!-- Error message -->
    <div v-if="error" class="flex items-center justify-center py-10">
      <p class="text-red-500">An error occured try refreshing the page</p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";
import { ImageCard } from "../components/gallery";
import { Loader, Search } from "../components/home";

const store = useStore();

const favorites = computed(() => {
  return store.state.favorites;
});

onMounted(() => {
  store.dispatch("getImages", { query: "nature" });
  //Check and Get favorites from local storage
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

const getMoreImages = () => {
  store.dispatch("getImages", { query: store.state.query });
};
</script>
<style scoped></style>
