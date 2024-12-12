<template lang="">
  <nav class="w-full overflow-hidden flex items-center justify-between sticky top-2 py-4 px-6 bg-white rounded-full z-10">
    <RouterLink to="/">
      
    <h1 class="text-xl font-bold text-black">VUE-PLASH</h1>
    </RouterLink>
    <div class="flex items-center gap-6">
        <RouterLink class="text-black hover:text-blue-400" to="/">Home</RouterLink>
        <RouterLink class="text-black hover:text-blue-400" to="/favorites">Favorites</RouterLink>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
