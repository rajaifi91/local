<script setup lang="ts">
</script>
<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/service">Services</router-link></li>
      <li><router-link to="/form">Registration Form</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contactus">Contact Us</router-link></li>
    </ul>
  </nav>

  </template>
  
  <script setup></script>
  
  <style scoped>
  header { display: flex; justify-content: space-between; align-items: center; }
    nav {
    background: #333;
    padding: 10px;
    width: 1000px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  li a {
    color: white;
    text-decoration: none;
  }
</style>