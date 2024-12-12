<template lang="">
  <div class="relative w-auto">
    <button class="absolute top-4 right-4 rounded-full" :class="{ 'bg-red-400' : checkFav(image) }" @click="toggleFav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
    <img
      :src="image.urls.regular"
      alt=""
      class="w-full h-72 md:h-96 object-cover rounded-xl"
    />
    <div class="flex items-center mt-4 gap-4">
      <img
        :src="image.user.profile_image.medium"
        class="w-10 h-10 rounded-full"
      />
      <p class=" text-black">{{ image.user.name }}</p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

function checkFav(image) {
  return props.favorites.find((favorite) => favorite.id === image.id);
}

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  favorites: {
    type: Array,
    required: false,
  },
});

const toggleFav = () => {
  store.dispatch("addToFavorites", {image: props.image});
};




</script>
<style lang=""></style>
