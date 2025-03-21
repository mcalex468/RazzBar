<template>
  <div v-if="product" class="product-detail">
    <div class="product-info">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="product-specs">
        <h2>{{ product.name }}</h2>
        <p><strong>Puffs:</strong> {{ product.puffs }}</p>
        <p><strong>Battery:</strong> {{ product.battery }}mAh</p>
        <p><strong>Nicotine:</strong> {{ product.nicotine.join(', ') }}</p>
        <p><strong>Charger:</strong> {{ product.charger }}</p>
        <p><strong>Type:</strong> {{ product.type }}</p>
        <p><strong>Info:</strong> {{ product.info }}</p>
      </div>
    </div>

    <div class="product-flavours">
      <h3>Flavours</h3>
      <ul>
        <li v-for="flavour in product.flavours" :key="flavour">{{ flavour }}</li>
      </ul>
    </div>

    <router-link to="/catalog" class="back-button">Back to Catalog</router-link>
  </div>

  <div v-else class="not-found">
    <h2>Product not found</h2>
    <router-link to="/catalog" class="back-button">Back to Catalog</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProducts } from "@/composables/useProducts";
import { computed } from "vue";

const { products } = useProducts();
const route = useRoute();

// Encontrar el producto por ID
const product = computed(() => products.value.find(p => p.id === Number(route.params.id)));
</script>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-info {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-image {
  max-width: 250px;
  border-radius: 10px;
  margin-right: 20px;
}

.product-specs {
  flex: 1;
}

.product-flavours {
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  columns: 2;
  /* Divide en dos columnas */
  gap: 20px;
}

li {
  margin: 5px 0;
  padding: 5px;
  background: #e3e3e3;
  border-radius: 5px;
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.not-found {
  text-align: center;
  padding: 20px;
}
</style>
