<!-- src/components/LanguageSwitch.vue -->
<template>
  <div class="language-switcher">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="label in languages" :key="code" :value="code">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const selectedLanguage = ref(localStorage.getItem("lang") || "es");

// Lista de idiomas con banderas
const languages = {
  en: "🇬🇧 English",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
};

// Cambia el idioma y guárdalo en localStorage
const changeLanguage = () => {
  locale.value = selectedLanguage.value;
  localStorage.setItem("lang", selectedLanguage.value);
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px; /* Para separarlo del navbar */
}

select {
  padding: 8px 12px;
  border-radius: 6px;
  background: white;
  border: 2px solid #3498db;
  font-size: 16px;
  cursor: pointer;
}
</style>
