<template>
    <div class="container mx-auto px-6 py-10">
        <h2 class="text-center text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Loop Products -->
            <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                <img :src="product.image" :alt="product.name" class="w-full h-56 object-cover" />
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
                    <div class="flex items-center text-yellow-500 mb-2">
                        <i class="fas fa-star" v-for="n in 5" :key="n" />
                    </div>
                    <div class="text-lg font-semibold flex items-center space-x-2">
                        <span>${{ product.price }}</span>
                        <span v-if="product.originalPrice" class="line-through text-gray-500">
                            ${{ product.originalPrice }}
                        </span>
                        <span v-if="product.discount" class="text-red-500">
                            -{{ product.discount }}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock Data for Products
const products = ref([
    {
        id: 1,
        name: 'Polo with Contrast Trims',
        image: 'https://i.pinimg.com/736x/de/b9/48/deb948d9f57c13c5c155c5af18774945.jpg',
        price: 212,
        originalPrice: 242,
        discount: 20,
        rating: 4.0,
    },
    {
        id: 2,
        name: 'Gradient Graphic T-shirt',
        image: 'https://i.pinimg.com/736x/95/c0/03/95c003360d4a313a7a9a7003e2047a5d.jpg',
        price: 145,
        originalPrice: null,
        discount: null,
        rating: 3.5,
    },
    {
        id: 3,
        name: 'Polo with Tipping Details',
        image: 'https://i.pinimg.com/736x/1f/a2/b5/1fa2b58beee672561763a331feea9f92.jpg',
        price: 180,
        originalPrice: null,
        discount: null,
        rating: 4.5,
    },
    {
        id: 4,
        name: 'Black Striped T-shirt',
        image: 'https://i.pinimg.com/736x/12/fa/10/12fa107a538443ea2e0ca2cc7d615c1b.jpg',
        price: 120,
        originalPrice: 160,
        discount: 25,
        rating: 5.0,
    },
]);
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมถ้าจำเป็น */
</style>