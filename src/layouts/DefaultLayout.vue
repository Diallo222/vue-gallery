<template lang="">
     <div class="w-screen h-screen overflow-y-auto bg-background py-2 px-6 md:px-10 lg:px-20">
       <Navbar />
       <main class="w-full h-full">
           <router-view></router-view>
       </main>
    </div>
</template>
<script setup>
import Navbar from '../components/nav/Navbar.vue';
</script>
<style lang="">
    
</style>