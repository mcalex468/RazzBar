<!-- src/views/Catalog.vue -->
<template>
 <div>
    <h2>{{ $t("catalog.title") }}</h2>
    <div class="grid">
      <div v-for="item in catalog" :key="item.id" class="card">
        <router-link :to="'/catalog/' + item.id">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ $t("catalog.product") }} {{ item.id }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const catalog = ref([
  { id: 1, name: "Producto 1", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Producto 2", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Producto 3", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Producto 4", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Producto 5", image: "https://via.placeholder.com/300" },
  { id: 6, name: "Producto 6", image: "https://via.placeholder.com/300" },
  { id: 7, name: "Producto 7", image: "https://via.placeholder.com/300" },
  { id: 8, name: "Producto 8", image: "https://via.placeholder.com/300" },
  { id: 9, name: "Producto 9", image: "https://via.placeholder.com/300" },
  { id: 10, name: "Producto 10", image: "https://via.placeholder.com/300" }
]);
</script>

<style scoped>
.catalog {
  padding: 40px;
  background: white;
  min-height: 100vh;
  text-align: center;
}

h2 {
  color: #222;
  font-size: 28px;
  margin-bottom: 20px;
}

/* Grid adaptable */
.grid {
  display: grid;
  gap: 20px;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
}

/* Responsividad */
@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Estilo de Tarjetas */
.card {
  background: #f3f3f3;
  padding: 15px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  border-radius: 8px;
}

h3 {
  text-align: center;
  color: #222;
  margin-top: 10px;
  font-size: 18px;
}
</style>
