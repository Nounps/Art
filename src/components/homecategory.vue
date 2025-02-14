<template>
    <div class="bg-gray-100 rounded-lg p-6">
        <h2 class="text-center text-4xl font-bold mb-6">Categoty</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="style in styles" :key="style.id" class="relative bg-white rounded-lg shadow-md overflow-hidden">
                <img :src="style.image" :alt="style.name" class="w-full h-40 object-cover" />
                <div class="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                    <span class="text-white text-lg font-semibold">{{ style.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Mock Data สำหรับ Style
const styles = [
    { id: 1, name: 'Oil', image: 'https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/9/1000x1000_091_scgt3_1704446142.jpg' },
    { id: 2, name: 'Acrylic', image: 'https://cdn.kreezalid.com/kreezalid/556408/catalog/8088/99/1000x1000_1x-pa120001_9kp47_598293798.jpg' },
    { id: 3, name: 'Resin', image: 'https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/99/img-3659_z7azc_852371124.jpg' },
    { id: 4, name: 'Pastels', image: 'https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/90/1000x1000_otto_zg3f0_379687693.jpeg' },
];
</script>

<style scoped>
/* เพิ่มสไตล์ถ้าจำเป็น */
</style>