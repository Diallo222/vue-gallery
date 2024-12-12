<template lang="">
  <div class="relative w-auto">
    <button
      class="absolute top-4 right-4 rounded-full"
      :class="{ 'bg-red-400': checkFav(image) }"
      @click="toggleFav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
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
    <div class="flex flex-wrap items-center mt-4 gap-4">
      <img
        :src="image.user.profile_image.medium"
        class="w-10 h-10 rounded-full"
      />
      <p class="text-black">{{ image.user.name }}</p>
    </div>
    <button
      class="px-4 py-2 mt-5 bg-black text-white rounded-full"
      @click="downloadImg(image.urls.full)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import axios from "axios";

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
  store.dispatch("addToFavorites", { image: props.image });
};

async function downloadImg(responseUrl) {
  try {
    const response = await axios.get(responseUrl, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.jpg");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the image:", error);
  }
}
</script>
<style lang=""></style>
