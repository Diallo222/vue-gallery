<template lang="">
  <div class="flex items-center justify-center gap-2 mx-auto mt-10 mb-9">
    <!-- Search Input -->
    <input
      type="text"
      placeholder="Search for images"
      class="w-[90%] md:w-1/2 rounded-full px-4 py-2 bg-white shadow-sm text-black"
      @change="onchange"
    />

    <div v-if="store.state.loading" class="flex items-center justify-center">
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
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

// Search for images on change
const onchange = ($event) => {
  if ($event.target.value === "") {
    return;
  }
  store.dispatch("getImages", { query: $event.target.value });
};
</script>
<style lang=""></style>
