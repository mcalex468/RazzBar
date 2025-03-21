<template>
    <div class="carousel">
        <button @click="prevImage" class="nav-button left">❮</button>
        <img :src="images[currentIndex]" :alt="'Product Image ' + (currentIndex + 1)" class="carousel-image" />
        <button @click="nextImage" class="nav-button right">❯</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
});

const currentIndex = ref(0);

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};
</script>

<style scoped>
.carousel {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out;
}

.nav-button {
    position: absolute;
    background: none;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.left {
    left: 10px;
}

.right {
    right: 10px;
}
</style>
