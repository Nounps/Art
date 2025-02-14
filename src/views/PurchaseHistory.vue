<template>
    <Navbar />
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-2xl font-bold mb-6">Purchase History</h1>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-else-if="!isLoggedIn" class="text-red-500">
            You need to log in to view your purchase history.
        </div>
        <div v-else>
            <div v-if="orders.length === 0" class="text-gray-700">
                You have no purchase history.
            </div>
            <div v-else class="space-y-4">
                <div v-for="(order, index) in orders" :key="order.id" class="border p-4 rounded-lg bg-gray-50">
                    <!-- <h2 class="text-lg font-bold mb-2">Order #{{ order.id }}</h2> -->
                    <p><span class="font-semibold">Date:</span> {{ formatDate(order.created_at) }}</p>
                    <p><span class="font-semibold">Total:</span> {{ formatPrice(order.total_price) }}</p>
                    <div>
                        <h3 class="font-semibold mt-4">Items:</h3>
                        <ul class="list-disc pl-5">
                            <li v-for="(item, itemIndex) in order.OrderItems" :key="itemIndex"
                                class="flex items-center space-x-4 mb-2">
                                <!-- แสดงรูปสินค้า -->
                                <img :src="item.Product?.ProductImages?.[0]?.image_url || '/placeholder.jpg'"
                                    alt="Product Image" class="w-12 h-12 object-cover rounded" />
                                <!-- แสดงชื่อสินค้าและข้อมูล -->
                                <div>
                                    <p>{{ item.Product?.name || "Unknown Product" }}</p>
                                    <p>Quantity: {{ item.quantity }}</p>
                                    <p>Price: {{ formatPrice(item.price) }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from '../components/Navbar.vue'
// State variables
const isLoggedIn = ref(false);
const userId = ref(null);
const orders = ref([]);
const error = ref("");

// Format price
const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", { style: "decimal", minimumFractionDigits: 0 }).format(price) + " KIP";
};

// Format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

// Load purchase history
onMounted(async () => {
    try {
        const token = localStorage.getItem("authToken");
        const user = JSON.parse(localStorage.getItem("user"));

        if (!token || !user) {
            error.value = "You need to log in to view your purchase history.";
            return;
        }

        isLoggedIn.value = true;
        userId.value = user.id;

        // Fetch purchase history from API
        const response = await axios.get(`http://localhost:5000/api/order-items/history/user/${userId.value}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log("API Response:", response.data); // Debug API response

        // Assign orders from API response
        orders.value = response.data.orders.map((order) => ({
            ...order,
            OrderItems: order.OrderItems.map((item) => ({
                ...item,
                Product: {
                    ...item.Product,
                    ProductImages: item.Product.ProductImages || [],
                },
            })),
        }));
    } catch (err) {
        console.error("Failed to load purchase history:", err.response?.data || err.message);
        error.value = "An error occurred while loading your purchase history.";
    }
});
</script>

<style scoped>
.container {
    max-width: 800px;
}

img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
}
</style>
