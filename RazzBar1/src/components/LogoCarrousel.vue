<template>
    <div class="logo-carousel">
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
            <img :src="logo" alt="Company Logo" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const logos = ref([
    "/img/razz4.png",
    "/img/razz2.png",
    "/img/razz3.png",
    "/img/razz4.png"
]);
</script>

<style scoped>
.logo-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.logo-item img {
    width: 100px;
    /* Tamaño uniforme */
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.logo-item img:hover {
    transform: scale(1.1);
}
</style>