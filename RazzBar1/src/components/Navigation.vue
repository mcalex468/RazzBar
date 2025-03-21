<template>
  <nav>
    <router-link to="/">HOME</router-link>
    <router-link to="/catalog">CATALOG</router-link>
    <router-link to="/contact">CONTACT</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 15px;
  background: #ffffff;
  border-radius: 15px;
  /* Fondo blanco para contrastar */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

a {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  padding: 8px 15px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease, letter-spacing 0.3s ease, color 0.3s ease;
}

a:hover {
  transform: scale(1.1);
  letter-spacing: 1px;
}
</style>
