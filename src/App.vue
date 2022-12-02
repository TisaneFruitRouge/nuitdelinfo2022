<template>
  <div>
    <the-navbar></the-navbar>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue';

if (!localStorage.getItem('gender')||!localStorage.getItem('looking')) {
  useRouter().push('/create');
}

</script>

<style scoped>
</style>
