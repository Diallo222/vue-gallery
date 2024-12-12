<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closeModal"
  >
    <div
      class="bg-white p-6 rounded-lg shadow-2xl relative flex flex-col md:flex-row max-w-4xl w-full mx-4"
    >
      <button
        class="absolute top-4 right-4 text-white focus:outline-none rounded-full px-4 py-2"
        @click="closeModal"
      >
        ✕
      </button>
      <button
        class="absolute top-4 left-4 rounded-full"
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
        :src="image.urls.full"
        alt="Image Detail"
        class="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg md:rounded-l-lg"
      />
      <div class="mt-4 md:mt-0 md:ml-6 w-full">
        <p class="text-black text-sm font-medium mb-2">
          Uploaded by: <span class="text-gray-800">{{ image.user.name }}</span>
        </p>
        <p class="text-gray-700 text-sm">
          {{ image.description || "No description available" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
button {
  transition: color 0.2s ease-in-out;
}
</style>
