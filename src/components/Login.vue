<template>
    <!-- <div class="container mx-auto flex items-center justify-center h-screen bg-gray-50 px-4">
        <div class="login-section bg-white p-10 rounded-lg shadow-md w-full max-w-md">
            <form @submit.prevent="onSubmit">
                <h2 class="text-3xl font-bold mb-6">Login</h2>
                <div class="input-group mb-4">
                    <label for="email" class="block mb-2">Email</label>
                    <Field name="email" id="email" type="email"
                        class="form-input w-full border border-gray-300 p-2 rounded" placeholder="Your Email" />
                    <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
                </div>
                <div class="input-group mb-4">
                    <label for="password" class="block mb-2">Password</label>
                    <Field name="password" id="password" type="password"
                        class="form-input w-full border border-gray-300 p-2 rounded" placeholder="Your Password" />
                    <ErrorMessage name="password" class="text-red-500 text-sm mt-1" />
                </div>
                <button type="submit" class="btn-primary w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    :disabled="isSubmitting">
                    <span v-if="isSubmitting">Logging in...</span>
                    <span v-else>Login</span>
                </button>
                <div class="m-5 text-blue-600" style="text-align: center;">
                    <a href="/register">Create Account</a>
                </div>
            </form>
        </div>
    </div> -->
    Login
</template>

<!-- <script setup lang="ts">
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

// สร้าง Schema Validation
const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

// ใช้ useForm เพื่อจัดการ Validation และ Handle Submit
const { handleSubmit } = useForm({
    validationSchema: schema,
});

// Router สำหรับเปลี่ยนหน้า
const router = useRouter();

// สถานะ Loading
const isSubmitting = ref(false);

// ฟังก์ชัน Submit
const onSubmit = handleSubmit(async (values) => {
    try {
        isSubmitting.value = true;

        // เรียก API
        const response = await api.post("http://localhost:5000/api/users/login", values);

        // เก็บ Token และข้อมูล User ลง LocalStorage
        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userId", user.id); // เพิ่ม userId ลง LocalStorage

        // alert("Login successful!");
        router.push("/");
    } catch (error: any) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Login failed: " + (error.response?.data?.message || error.message));
    } finally {
        isSubmitting.value = false;
    }
});
</script> -->

<style scoped>
.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    background-color: #f5f5f5;
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