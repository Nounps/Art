<template>
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-4">Products</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- แสดงรายการสินค้าโดยใช้ Product.vue -->
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api"; // Axios Instance
import ProductCard from "../components/ProductCard.vue"; // Component แสดงสินค้า

const products = ref([]); // เก็บรายการสินค้าจาก Backend

const fetchProducts = async () => {
    try {
        const response = await api.get("/products"); // ดึงข้อมูลจาก Backend
        products.value = response.data;
        console.log("Products fetched:", products.value);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

// ดึงข้อมูลเมื่อ Component ถูก mount
onMounted(() => {
    fetchProducts();
});
</script>

<style scoped>
.container {
    max-width: 1200px;
}

.grid {
    gap: 1.5rem;
}
</style>