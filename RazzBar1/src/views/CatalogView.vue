<!-- src/views/Catalog.vue -->
<template>
  <div>
    <h2>Nuestro Catálogo</h2>
    <div class="grid">
      <div v-for="item in catalog" :key="item.id" class="card">
        <router-link :to="'/catalog/' + item.id">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const catalog = ref([
  { id: 1, name: "Producto 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Producto 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Producto 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Producto 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Producto 5", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Producto 6", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Producto 7", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Producto 8", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Producto 9", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Producto 10", image: "https://via.placeholder.com/150" }
]);
</script>

<style scoped>
.catalog {
  padding: 40px;
  background: white;
  min-height: 100vh;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card {
  background: #ECECEC;
  padding: 15px;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  border-radius: 8px;
}

h3 {
  text-align: center;
  color: #222;
}
</style>