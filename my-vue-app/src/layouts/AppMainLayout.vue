<script setup lang="ts">

</script>
<template>
    <div>
      <AppHeader />
    </div>

    <div>
      <AppUserForm />
    </div>
    
    <router-view />

    <div>
      <AppFooter/>
    </div>
  </template>
  
  <script setup>
import AppHeader from '../components/AppHeader.vue';
import AppUserForm from '../components/AppUserForm.vue';
import AppFooter from '../components/AppFooter.vue';
  </script>