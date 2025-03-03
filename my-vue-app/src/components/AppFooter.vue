<script setup lang="ts">
</script>
<template>
  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} My Vue App. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 5px 0;
  position: fixed;
  bottom: 10px;
  width: 1000px;
}
</style>