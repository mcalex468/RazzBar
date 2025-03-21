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
  const phoneNumber = "34684723541"; // 📌 Añade el código de país (Ej: España 🇪🇸 -> 34)
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
/* Contenedor principal */
.contenedor {
  max-width: 100%;
  width: 90%;
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Formulario */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
  resize: none;
}

/* Botón */
button {
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: linear-gradient(90deg, #6de280, #4cb8c4);
  color: white;
  font-weight: bold;
  transition: background 1.5s ease, transform 0.6s ease;
}

button:hover {
  background: linear-gradient(90deg, #74da92, #26b7e4);
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 480px) {
  .contenedor {
    width: 95%;
    padding: 15px;
  }

  input,
  textarea {
    font-size: 14px;
    padding: 10px;
  }

  button {
    font-size: 16px;
    padding: 10px;
  }
}
</style>
