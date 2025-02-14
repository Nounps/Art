<template>
    <form @submit.prevent="handleSubmit" class="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-3xl font-bold mb-6">Register</h2>

        <!-- Name Field -->
        <div class="input-group mb-4">
            <label for="name" class="block mb-2">Name</label>
            <input type="text" id="name" v-model="form.name" class="form-input" placeholder="Your Name" />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <!-- Email Field -->
        <div class="input-group mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-input" placeholder="Your Email" />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- Password Field -->
        <div class="input-group mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input type="password" id="password" v-model="form.password" class="form-input"
                placeholder="Your Password" />
            <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn-primary w-full" :disabled="isSubmitting">
            <span v-if="isSubmitting">Registering...</span>
            <span v-else>Register</span>
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router"; // ใช้สำหรับเปลี่ยน route
import axios from "axios";

// ฟอร์มข้อมูล
const form = ref({
    name: "",
    email: "",
    password: "",
});

// เก็บสถานะและข้อผิดพลาด
const isSubmitting = ref(false);
const errors = ref({
    name: "",
    email: "",
    password: "",
});

// Router
const router = useRouter(); // ใช้งาน Vue Router

// ฟังก์ชันสำหรับ Submit
const handleSubmit = async () => {
    // รีเซ็ตข้อผิดพลาด
    errors.value = { name: "", email: "", password: "" };

    // เริ่มส่งคำขอ
    isSubmitting.value = true;
    try {
        console.log("Sending request to backend...");
        const response = await axios.post("http://localhost:5000/api/users/register", form.value);
        console.log("API Response:", response.data); // Debug: ดูข้อมูลที่ได้รับจาก backend
        alert("Registration successful: " + response.data.message);
        // รีเซ็ตฟอร์มหลังลงทะเบียนสำเร็จ
        form.value = { name: "", email: "", password: "" };

        // เปลี่ยนหน้าไปยัง Login
        router.push("/login"); // Redirect ไปหน้า /login
    } catch (error: any) {
        console.error("Error during registration:", error);

        if (error.response && error.response.data.errors) {
            // แสดงข้อผิดพลาดจาก backend
            const backendErrors = error.response.data.errors;
            errors.value.name = backendErrors.name || "";
            errors.value.email = backendErrors.email || "";
            errors.value.password = backendErrors.password || "";
        } else {
            alert("An unexpected error occurred.");
        }
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
}

.btn-primary {
    padding: 0.75rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
}

.btn-primary:disabled {
    background-color: gray;
    cursor: not-allowed;
}
</style>