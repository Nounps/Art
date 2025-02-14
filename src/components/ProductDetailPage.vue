<template>
    <div class="container mx-auto px-6 py-10">
        <!-- Breadcrumb -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Section: Product Images -->
            <div v-if="product">
                <div class="mb-4">
                    <img :src="selectedImage" alt="Main Product" class="w-full rounded-lg" />
                </div>
                <div class="flex space-x-4">
                    <img v-for="(image, index) in product.images" :key="index" :src="image" alt="Thumbnail"
                        class="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:border-black"
                        @click="selectImage(image)" />
                </div>
            </div>

            <!-- Right Section: Product Details -->
            <div v-if="product">
                <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
                <div class="flex items-center space-x-2 mb-4">
                    <span class="text-yellow-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <span class="text-gray-600">(4.5/5)</span>
                </div>
                <div class="flex items-center space-x-4 mb-4">
                    <span class="text-2xl font-bold">{{ product.price }} KIP</span>
                    <span class="text-gray-400 line-through">{{ product.original_price }} KIP</span>
                    <span class="text-red-500">-{{ product.discount_percentage }}%</span>
                </div>
                <p class="text-gray-600 mb-6">
                    {{ product.description }}
                </p>

                <!-- Select Size -->
                <div class="mb-6">
                    <h4 class="text-lg font-bold mb-2">Choose Size</h4>
                    <div class="flex space-x-4">
                        <button class="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">Small</button>
                        <button class="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">Medium</button>
                        <button class="px-4 py-2 border rounded-lg text-sm bg-black text-white hover:bg-gray-800">
                            Large
                        </button>
                        <button class="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">X-Large</button>
                    </div>
                </div>

                <!-- Quantity and Add to Cart -->
                <div class="flex items-center space-x-4">
                    <div class="flex items-center border rounded-lg">
                        <button @click="decreaseQuantity" class="px-4 py-2 text-lg hover:bg-gray-200">-</button>
                        <input type="text" v-model="quantity"
                            class="w-12 text-center border-l border-r focus:outline-none" />
                        <button @click="increaseQuantity" class="px-4 py-2 text-lg hover:bg-gray-200">+</button>
                    </div>
                    <button @click="addToCart" class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                        Add to Cart
                    </button>
                </div>
            </div>

            <!-- Loading State -->
            <div v-else>
                <p>Loading...</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
// import api from "../api";

// const product = ref(null);
// const selectedImage = ref("");
// const quantity = ref(1);
// const route = useRoute();
// const router = useRouter();

// const fetchProductDetails = async () => {
//     try {
//         const response = await api.get(`/products/${route.params.id}`);
//         const productData = response.data;

//         const imageResponse = await api.get(`/product-images`);
//         const imagesData = imageResponse.data;

//         const filteredImages = imagesData
//             .filter((image) => image.product_id === productData.id)
//             .map((image) => image.image_url);

//         product.value = {
//             ...productData,
//             images: filteredImages.length > 0 ? filteredImages : ["https://via.placeholder.com/150"],
//         };

//         selectedImage.value = product.value.images[0];
//     } catch (error) {
//         console.error("Error fetching product details:", error);
//     }
// };

// const selectImage = (image) => {
//     selectedImage.value = image;
// };

// const decreaseQuantity = () => {
//     if (quantity.value > 1) quantity.value--;
// };

// const increaseQuantity = () => {
//     quantity.value++;
// };

// const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const item = {
//         id: product.value.id,
//         name: product.value.name,
//         price: parseFloat(product.value.price.replace(/\./g, "")), // แปลง '300.000' เป็น 300000
//         image: selectedImage.value,
//         quantity: quantity.value,
//     };

//     cart.push(item);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Added to Cart!");
//     router.push("/delivery-method");
// };

// onMounted(fetchProductDetails);
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมถ้าจำเป็น */
</style>
