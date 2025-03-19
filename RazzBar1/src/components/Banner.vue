<template>
    <div class="banner">
        <div class="marquee">
            <span v-for="text in repeatedText" :key="text">
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

// Generamos texto repetido para que la animación sea fluida
const repeatedText = computed(() =>
    Array(20).fill("FREE SHIP 3-6 DAYS   ")
);
</script>

<style scoped>
.banner {
    margin-top: 15px;
    overflow: hidden;
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
}

.marquee {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    animation: scroll 80s linear infinite;
}

/* Animación de desplazamiento */
@keyframes scroll {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(-100%);
    }
}

span {
    font-weight: bold;
    background: linear-gradient(90deg, #59e470, #0a828f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
}
</style>