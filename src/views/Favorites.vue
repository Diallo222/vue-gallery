<template lang="">
  <div class="w-full h-full mt-10">
    <div
      v-if="Favorites.length === 0"
      class="flex items-center justify-center py-10"
    >
      <p class="text-2xl text-black">No favorites yet</p>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-10"
    >
      <div v-for="image in Favorites" :key="image.id">
        <ImageCard :image="image" :favorites="Favorites" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import ImageCard from "../components/gallery/ImageCard.vue";
const store = useStore();
const Favorites = computed(() => {
  return store.state.favorites;
});
</script>
<style lang=""></style>
