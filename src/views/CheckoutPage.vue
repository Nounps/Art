<template>
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-2xl font-bold mb-6">Checkout</h1>

        <!-- Delivery Method -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Delivery Method</h2>
            <p v-if="deliveryMethod === 'standard'" class="text-gray-800">Standard Delivery (10,000 KIP)</p>
            <p v-else-if="deliveryMethod === 'express'" class="text-gray-800">Express Delivery (20,000 KIP)</p>
            <p v-else-if="deliveryMethod === 'pickup'" class="text-gray-800">Pick Up (Free)</p>
            <p v-else class="text-gray-800">No delivery method selected</p>
        </div>

        <!-- Order Summary -->
        <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Order Summary</h2>
            <div v-for="(item, index) in cartItems" :key="item.id" class="flex justify-between mb-2 items-center">
                <div>
                    <span>{{ item.name }} x {{ item.quantity }}</span>
                    <span class="text-sm text-red-600 ml-2 cursor-pointer hover:underline" @click="removeItem(index)">
                        Remove
                    </span>
                </div>
                <span>{{ formatPrice(item.price * item.quantity) }}</span>
            </div>
            <div class="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>{{ formatPrice(totalAmount) }}</span>
            </div>
        </div>

        <!-- Place Order Button -->
        <div>
            <button class="bg-black text-white px-6 py-3 rounded-lg" @click="placeOrder">
                Place Order
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios"; // ใช้ axios สำหรับส่ง API

const cartItems = ref([]);
const deliveryMethod = ref(null);
const totalAmount = ref(0);

const router = useRouter();

onMounted(() => {
    const storedCart = localStorage.getItem("cart");
    cartItems.value = storedCart ? JSON.parse(storedCart) : [];

    const storedDeliveryMethod = localStorage.getItem("deliveryMethod");
    deliveryMethod.value = storedDeliveryMethod ? JSON.parse(storedDeliveryMethod) : null;

    calculateTotal();
});

const calculateTotal = () => {
    const deliveryCost =
        deliveryMethod.value === "standard" ? 10000 : deliveryMethod.value === "express" ? 20000 : 0;

    totalAmount.value = cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0) + deliveryCost;
};

const removeItem = (index) => {
    cartItems.value.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems.value));
    calculateTotal();
};

const placeOrder = async () => {
    try {
        const token = localStorage.getItem("authToken");
        const user = JSON.parse(localStorage.getItem("user"));
        const products = encodeURIComponent(JSON.stringify(cartItems.value)); // เข้ารหัสสินค้า
        const deliveryMethodText = deliveryMethod.value;
        const totalPrice = totalAmount.value;

        if (!token || !user) {
            alert("You need to log in to place an order.");
            return; // หยุดการทำงานถ้าไม่มี Token หรือ User
        }

        const orderData = {
            user_id: user.id,
            total_price: totalAmount.value,
            status: "Pending",
            items: cartItems.value.map((item) => ({
                product_id: item.id,
                quantity: item.quantity,
                price: item.price,
            })),
        };


        // Debugging: ตรวจสอบข้อมูลก่อนส่ง
        console.log("Order Data:", orderData);

        // ส่งข้อมูลไปยัง API
        const response = await axios.post("http://localhost:5000/api/orders", orderData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        alert("Order placed successfully!");
        console.log("API Response:", response.data);

        // ล้างข้อมูลตะกร้า
        localStorage.removeItem("cart");
        router.push({
            path: "/bill",
            query: {
                products,
                deliveryMethod: deliveryMethodText,
                totalAmount: totalPrice,
            },
        });

    } catch (error) {
        console.error("Error placing order:", error.response?.data || error.message);
        alert("Error placing order: " + (error.response?.data?.message || error.message));
    }
};


const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", { style: "decimal", minimumFractionDigits: 0 }).format(price) + " KIP";
};
</script>

<style scoped>
.container {
    max-width: 800px;
}
</style>
