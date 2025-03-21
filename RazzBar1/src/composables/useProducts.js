import { ref } from "vue";
import productsData from "../assets/productos.json";

export function useProducts() {
    const products = ref(productsData);

    const getProductById = (id) => {
        return products.value.find((product) => product.id === Number(id));
    };

    return { products, getProductById };
}
