<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h2>Bienvenido a RAZZ BAR</h2>
    <p>Explore our catalogue of products</p>
    <LogoCarrousel />
  </div>

  <!-- Sección de Cards -->
  <div class="cards-container">
    <div class="card" v-for="(item, index) in cards" :key="index">
      <img :src="item.image" :alt="item.title" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>

  <!-- Sección Informativa -->
  <div class="about">
    <h3>About Us</h3>
    <p>
      We are a manufacturing company based in Hangzhou, China, with warehouses across Europe.
      We work with DHL to ensure fast and secure shipping worldwide.
      Quality, efficiency, and customer satisfaction are our top priorities.
    </p>
  </div>
</template>

<script setup>
import LogoCarrousel from "@/components/LogoCarrousel.vue";
import { ref } from "vue";

const cards = ref([
  {
    image: "/img/dhl.png",
    title: "Fast Shipping",
    description: "We ensure quick and secure shipping to all locations worldwide."
  },
  {
    image: "/img/fabrica.png",
    title: "High Quality",
    description: "Our products are crafted with top-notch materials and strict quality control."
  },
  {
    image: "/img/almacen.png",
    title: "Global Warehouses",
    description: "Our warehouses across Europe ensure fast and efficient distribution."
  }
]);
</script>

<style scoped>
/* Estilo del contenedor principal */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  background: white;
}

/* Títulos */
h2 {
  font-size: 36px;
  color: #222;
  margin-bottom: 10px;
}

h3 {
  color: #333;
  font-size: 22px;
  margin: 10px 0;
}

/* Texto general */
p {
  font-size: 18px;
  color: #666;
  max-width: 800px;
}

/* Contenedor de Cards centrado */
.cards-container {
  display: flex;
  justify-content: center;
  /* Centra las cards */
  gap: 20px;
  flex-wrap: wrap;
  /* Permite que se adapten a la pantalla */
  max-width: 900px;
  margin: 40px auto;
  /* Centra horizontalmente */
}

/* Estilo de cada Card */
.card {
  background: #f3f3f3;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  width: 250px;
  /* Tamaño uniforme */
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  border-radius: 8px;
}

/* Sección de "About Us" centrada */
.about {
  background: #e3f2e1;
  padding: 20px;
  margin: 40px auto;
  /* Centrado horizontalmente */
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
  /* Texto centrado */
}
</style>
