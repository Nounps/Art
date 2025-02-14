<template>
    <div class="container mx-auto px-6 py-10">
        <h1 class="text-2xl font-bold mb-6">Choose Your Delivery Method</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div :class="['p-6 border rounded-lg cursor-pointer', selectedMethod === 'standard' ? 'border-blue-500' : '']"
                @click="selectMethod('standard')">
                <h2 class="text-lg font-bold mb-2">Standard Delivery</h2>
                <p class="text-gray-600 mb-4">Delivery in 5-7 business days</p>
                <p class="text-gray-800 font-bold">10,000 KIP</p>
            </div>

            <div :class="['p-6 border rounded-lg cursor-pointer', selectedMethod === 'express' ? 'border-blue-500' : '']"
                @click="selectMethod('express')">
                <h2 class="text-lg font-bold mb-2">Express Delivery</h2>
                <p class="text-gray-600 mb-4">Delivery in 1-2 business days</p>
                <p class="text-gray-800 font-bold">20,000 KIP</p>
            </div>

            <div :class="['p-6 border rounded-lg cursor-pointer', selectedMethod === 'pickup' ? 'border-blue-500' : '']"
                @click="selectMethod('pickup')">
                <h2 class="text-lg font-bold mb-2">Pick Up</h2>
                <p class="text-gray-600 mb-4">Pick up your order at our store</p>
                <p class="text-gray-800 font-bold">Free</p>
            </div>
        </div>

        <div class="mt-6">
            <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600" @click="confirmDeliveryMethod"
                :disabled="!selectedMethod">
                Confirm Delivery Method
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedMethod = ref(null);
const router = useRouter();

const selectMethod = (method) => {
    selectedMethod.value = method;
};

const confirmDeliveryMethod = () => {
    if (selectedMethod.value) {
        localStorage.setItem("deliveryMethod", JSON.stringify(selectedMethod.value));
        router.push("/checkout");
    } else {
        alert("Please select a delivery method");
    }
};
</script>

<style scoped>
.border-blue-500 {
    border-width: 2px;
}
</style>