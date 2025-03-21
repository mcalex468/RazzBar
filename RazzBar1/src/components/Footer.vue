<template>
  <footer>
    <div class="footer-container">
      <!-- Sección Izquierda: Logo -->
      <div class="footer-logo">
        <img src="/img/razz1.png" alt="RazzBar" />
      </div>

      <!-- Sección Central: Links -->
      <div class="footer-links">
        <router-link to="/privacy-policy">Política de Privacidad</router-link>
        <router-link to="/terms">Términos y Condiciones</router-link>
        <p>📞 Tel: +34 600 123 456</p>
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

<style scoped>
footer {
  background: #e0e0e0;
  /* Nuevo gris claro */
  padding: 20px;
  text-align: center;
  margin-top: 20px;
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

/* Logo */
.footer-logo img {
  width: 80px;
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
