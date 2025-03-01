<script setup lang="ts">
</script>
<template>
    <header class="p-4 bg-blue-500 text-white">
      <h1>My App</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  </template>
  
  <script setup></script>
  
  <style scoped>
  header { display: flex; justify-content: space-between; align-items: center; }
  </style>