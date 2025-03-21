<template>
  <footer>
    <div class="footer-container">
      <!-- Sección Izquierda: Logo (carrusel más pequeño en footer) -->
      <div class="footer-logo small-logo">
        <LogoCarousel />
      </div>

      <!-- Sección Central: Links -->
      <div class="footer-links">
        <router-link to="/privacy-policy">Política de Privacidad</router-link>
        <router-link to="/terms">Términos y Condiciones</router-link>
      </div>

      <!-- Sección Derecha: Información -->
      <div class="footer-info">
        <div class="info-item">
          <span>📍</span>
          <p>Europa</p>
        </div>
        <div class="info-item">
          <span>✉️</span>
          <p>bestsupplier@gmail.com</p>
        </div>
      </div>
    </div>
    <p class="copyright">&copy; 2025 Razz Bar. All rights reserved.</p>
  </footer>
</template>

<script setup>
import LogoCarousel from "@/components/LogoCarrousel.vue";
</script>

<style scoped>
footer {
  background: #e0e0e0;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
}

/* Contenedor principal */
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

/* Estilos para hacer el LogoCarousel más pequeño en el footer */
.small-logo {
  width: 100px;
  /* Ajusta el tamaño del contenedor */
  height: 60px;
  /* Ajusta la altura */
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-logo img {
  width: 80px !important;
  /* Tamaño más pequeño */
  height: auto;
}

/* Sección Central */
.footer-links {
  text-align: center;
}

.footer-links a,
.footer-links p {
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 0.8;
}

/* Sección Derecha */
.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.info-item p {
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Copyright */
.copyright {
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.8;
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
