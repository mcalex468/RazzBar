<template>
  <div class="catalog">
    <h2>Our Products</h2>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <router-link :to="'/product/' + product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from "@/composables/useProducts";

const { products } = useProducts();
</script>

<style scoped>
.catalog {
  text-align: center;
  padding: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 3 columnas en escritorio */
  gap: 20px;
  justify-content: center;
  max-width: 900px;
  margin: auto;
}

/* Responsive para tablets */
@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
    /* 2 columnas en tablets */
  }
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(1, 1fr);
    /* 1 columna en móviles */
  }
}

.product-card {
  background: #f3f3f3;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
}

.product-card:hover {
  transform: scale(1.05);
}
</style>
