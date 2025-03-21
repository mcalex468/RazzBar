<template>
  <div v-if="product" class="product-detail">
    <div class="product-info">
      <ImageCarousel :images="product.images" />
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
import ImageCarousel from "@/components/ImageCarousel.vue";

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
  padding: 30px;
  background: linear-gradient(to bottom, #ffffff, #f4f4f4);
  min-height: 100vh;
}

.product-info {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.product-info:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.product-image {
  max-width: 250px;
  border-radius: 12px;
  margin-right: 20px;
  transition: transform 0.5s ease-in-out;
}

.product-image:hover {
  transform: scale(1.05) rotate(2deg);
}

.product-specs {
  flex: 1;
}

.product-specs p {
  font-size: 18px;
  color: #444;
  margin: 8px 0;
  padding: 5px;
  transition: transform 1s ease-in-out, color 1s ease-in-out, text-shadow 1s ease-in-out;
  position: relative;
}

.product-specs p:hover {
  font-weight: bold;
  background: linear-gradient(90deg, #6de280, #4cb8c4, #f4a261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 15px rgba(76, 184, 196, 0.7);
  transform: scale(1.08);
}



.product-specs h2 {
  font-size: 26px;
  font-weight: bold;
  background: linear-gradient(90deg, #e7fa42, #96f52a, #52ff02);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 1s ease-in-out;
}

.product-specs h2:hover {
  transform: scale(1.07);

}

.product-flavours {
  max-width: 800px;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #92908e, #d1cdc8, #252524);
  color: white;
  text-align: center;
}

.product-flavours h3 {
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: black;

  transition: transform 0.4s ease-in-out, background 0.6s ease-in-out, color 0.6s ease-in-out;
}

.product-flavours h3:hover {
  background: linear-gradient(90deg, #e9ec4a, #aae935, #70fd38);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.1);
}

li {
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

li:hover {
  transform: scale(1.1);
}

/* Colores más vivos para los sabores */
li:nth-child(1n) {
  background: #ff4757;
}

/* Rojo intenso */
li:nth-child(2n) {
  background: #ffa502;
}

/* Amarillo-naranja */
li:nth-child(3n) {
  background: #2ed573;
}

/* Verde neón */
li:nth-child(4n) {
  background: #1e90ff;
}

/* Azul eléctrico */
li:nth-child(5n) {
  background: #9b59b6;
}

/* Morado vibrante */
li:nth-child(6n) {
  background: #e84393;
}

/* Rosa fuerte */



li {
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

li:hover {
  transform: scale(1.1);
}



.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  background: linear-gradient(90deg, #ffcc33, #ff6600);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
