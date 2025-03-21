<script setup>
import Banner from './Banner.vue';
import Navigation from './Navigation.vue';
</script>

<!-- src/components/Header.vue -->
<template>
  <header>
    <h1>RAZZ BAR</h1>
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
  box-shadow: 0px 4px 10px rgba(189, 35, 35, 0.1);
}
</style>