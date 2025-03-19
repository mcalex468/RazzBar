<!-- src/views/CatalogDetail.vue -->
<template>
    <div>
      <h2>Detalle del Producto</h2>
      <p>Estás viendo el producto con ID: {{ id }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['id']);
  </script>
  
  
<style scoped>
.detail {
  text-align: center;
  padding: 50px;
  background: #ffffff;
}

h2 {
  color: #222;
}
</style>