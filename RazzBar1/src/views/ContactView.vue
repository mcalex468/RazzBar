<template>
  <div class="contenedor">
    <h1>Contact Us</h1>

    <!-- Formulario de contacto -->
    <div class="formulario">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Gmail" required />
      <textarea v-model="message" placeholder="Your message..." required></textarea>
      <button @click="sendWhatsApp">Send Message</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const sendWhatsApp = () => {
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill in all fields before sending!");
    return;
  }

  const phoneNumber = "684723541"; // 🔥 PON AQUÍ TU NÚMERO DE WHATSAPP
  const text = `Hello! My name is ${name.value}. My email is ${email.value}. \n\n${message.value}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  // Abrir WhatsApp
  window.open(whatsappURL, "_blank");

  // Limpiar formulario
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style scoped>
.contenedor {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

textarea {
  height: 80px;
  resize: none;
}

button {
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  color: white;
  transition: background 1.5s ease, transform 0.6s ease;
}

button:hover {
  background: linear-gradient(90deg, #74da92, #26b7e4);
  /* Azul oscuro a morado */
  transform: scale(1.05);
}
</style>
