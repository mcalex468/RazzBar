<!-- src/components/Footer.vue -->
<template>
  <footer>
    <div class="footer-container">
      <!-- Sección Izquierda: Logo -->
      <div class="footer-logo">
        <img src="../assets/img/razz1.jpg" alt="Mi Marca" />
      </div>

      <!-- Sección Central: Links -->
      <div class="footer-links">
        <router-link to="/privacy-policy">Política de Privacidad</router-link>
        <router-link to="/terms">Términos y Condiciones</router-link>
        <p>📞 Tel: +34 600 123 456</p>
      </div>

      <!-- Sección Derecha: Información -->
      <div class="footer-info">
        <p>📍 Europa </p>
        <p>✉️ bestsupplier@gmail.com</p>
      </div>
    </div>
    <p class="copyright">&copy; 2025 Razz Bar. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  background: #222;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-logo img {
  width: 80px;
  height: auto;
}

.footer-links {
  text-align: center;
}

.footer-links a {
  color: #6de280;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #4cb8c4;
}

.footer-info {
  text-align: right;
}

.copyright {
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.8;
}
</style>
