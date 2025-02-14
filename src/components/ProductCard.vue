<template>
    <div @click="goToDetails(product)" class="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer">
        <img :src="product.image" :alt="product.name" class="w-full h-80 object-cover mb-4 rounded" />
        <h3 class="font-semibold text-lg">{{ product.name }}</h3>
        <div class="text-lg font-semibold">{{ product.price }} KIP </div>
    </div>
    product
</template>

<script setup>
// import { useRouter } from "vue-router";

// รับ `product` ผ่าน props
defineProps({
    product: {
        type: Object,
        required: true,
    },
});

// const router = useRouter();

// // ฟังก์ชันสำหรับไปยังหน้าแสดงรายละเอียดสินค้า
// const goToDetails = (product) => {
//     if (product && product.id) {
//         router.push(`/product/${product.id}`);
//     } else {
//         console.error("Product ID is undefined");
//     }
// };
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมถ้าจำเป็น */
</style>
