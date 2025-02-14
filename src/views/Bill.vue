<template>
    <Navbar />
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-2xl font-bold mb-6">Bill</h1>
        <div v-if="error">
            <p class="text-red-500">{{ error }}</p>
        </div>
        <div v-else-if="!customerName">
            <p class="text-red-500">You need to log in to view your bill details.</p>
        </div>
        <div v-else>
            <!-- Billing Details -->
            <div class="mb-6 border p-4 rounded-lg bg-gray-50">
                <h2 class="text-lg font-bold mb-4">Billing Details</h2>
                <p><span class="font-semibold">Name:</span> {{ customerName }}</p>
                <p><span class="font-semibold">Email:</span> {{ customerEmail }}</p>
                <p><span class="font-semibold">Delivery Method:</span> {{ deliveryMethodText }}</p>
            </div>

            <!-- Order Summary -->
            <div class="mb-6 border p-4 rounded-lg bg-gray-50">
                <h2 class="text-lg font-bold mb-4">Order Summary</h2>
                <div v-for="(item, index) in cartItems" :key="item.id" class="flex justify-between mb-2">
                    <div>
                        <span>{{ item.name }} x {{ item.quantity }}</span>
                    </div>
                    <div>{{ formatPrice(item.price * item.quantity) }}</div>
                </div>
                <div class="flex justify-between font-bold border-t pt-2">
                    <span>Total</span>
                    <span>{{ formatPrice(totalAmount) }}</span>
                </div>
            </div>
        </div>
        <button style="color: white; background-color: black; border-radius:15px; width: 100px; height: 50px;"><a
                href="/">Home</a></button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import jwt_decode from "jwt-decode";
import Navbar from '../components/Navbar.vue'
// ตัวแปรสำหรับข้อมูลผู้ใช้
const customerName = ref("");
const customerEmail = ref("");
const customerAddress = ref("");
const error = ref("");

// ตัวแปรอื่นๆ
const deliveryMethod = ref("");
const deliveryMethodText = ref("");
const cartItems = ref([]);
const totalAmount = ref(0);

const route = useRoute();

const formatDeliveryMethod = () => {
    switch (deliveryMethod.value) {
        case "standard":
            deliveryMethodText.value = "Standard Delivery (10,000 KIP)";
            break;
        case "express":
            deliveryMethodText.value = "Express Delivery (20,000 KIP)";
            break;
        case "pickup":
            deliveryMethodText.value = "Pick Up (Free)";
            break;
        default:
            deliveryMethodText.value = "Unknown Delivery Method";
    }
};

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", { style: "decimal", minimumFractionDigits: 0 }).format(price) + " KIP";
};

onMounted(() => {
    try {
        // ดึงข้อมูลผู้ใช้จาก LocalStorage
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            customerName.value = user.name || "Unknown Name";
            customerEmail.value = user.email || "Unknown Email";
        } else {
            error.value = "You need to log in to view your bill details.";
            return;
        }

        // ดึงข้อมูลสินค้าและการจัดส่งจาก Query
        const products = route.query.products
            ? JSON.parse(decodeURIComponent(route.query.products))
            : [];
        cartItems.value = products;

        deliveryMethod.value = route.query.deliveryMethod || "pickup";
        totalAmount.value = route.query.totalAmount ? parseFloat(route.query.totalAmount) : 0;

        formatDeliveryMethod();
    } catch (err) {
        error.value = "An error occurred while loading the bill details.";
        console.error("Error in Bill.vue:", err);
    }
});

</script>

<style scoped>
.container {
    max-width: 800px;
}
</style>
