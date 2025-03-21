<template>
    <div class="carousel-container">
        <div class="carousel">
            <img :src="logos[currentIndex]" alt="Company Logo" class="carousel-image" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const logos = ref([
    "/img/razz1.png",
    "/img/razz2.png",
    "/img/razz3.png",
    "/img/razz4.png"
]);

const currentIndex = ref(0);
let interval = null;

const startCarousel = () => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % logos.value.length;
    }, 30000); // Cambia cada 30 segundos
};

onMounted(() => {
    startCarousel();
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.carousel {
    width: 150px;
    /* Tamaño fijo */
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: opacity 1s ease-in-out;
}
</style>