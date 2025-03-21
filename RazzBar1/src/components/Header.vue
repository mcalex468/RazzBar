<script setup>
import Banner from './Banner.vue';
import Navigation from './Navigation.vue';
</script>

<!-- src/components/Header.vue -->
<template>
  <header>
    <img src="../../public/img/razz1.png" alt="RAZZ BAR">
    <Navigation />
    <Banner />
  </header>
</template>

<style scoped>
h1 {
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.7s ease, letter-spacing 0.3s ease;
  transform-origin: center;
}

h1:hover {
  transform: scale(1.1) rotateX(10deg);
  letter-spacing: 2px;
}

header {
  background: #e0e0e0;
  color: #222;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(22, 22, 22, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

header img {
  width: 180px;
  margin-bottom: 10px;
  /* Ajusta el tamaño */
  height: auto;
  transition: transform 1s ease-in-out, filter 0.5s ease-in-out;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
}

header img:hover {
  transform: scale(1.1);
  filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.3));
}
</style>