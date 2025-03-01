<script setup lang="ts">

</script>
<template>
    <div>
      <AppHeader />

      <main class="p-4">

      <AppUserForm />
        <router-view />
      </main>
      <AppFooter/>
    </div>
  </template>
  
  <script setup>
import AppHeader from '../components/AppHeader.vue';
import AppUserForm from '../components/AppUserForm.vue';
import AppFooter from '../components/AppFooter.vue';
  </script>