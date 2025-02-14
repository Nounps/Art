<template>
  <header class="bg-black text-white px-6 py-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold"><a href="/">PICTURE ART</a></h1>
    <nav class="flex space-x-6">
      <a href="/" class="hover:text-gray-400">Home</a>
      <a href="/Art" class="hover:text-gray-400">Art</a>    
      <a href="/Artist" class="hover:text-gray-400">Artist</a>    
      <a href="/about" class="hover:text-gray-400">About</a>
      <!-- <a href="/Shop" class="hover:text-gray-400">Shop</a> -->
      <!-- <a href="/history" class="hover:text-gray-400">History</a> -->
  
    </nav>
    <div class="flex items-center space-x-4">
      
      <!-- <template v-if="!isLoggedIn">
        <button class="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm font-medium"
          @click="router.push('/login')">
          Login
        </button>
        <button class="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm font-medium"
          @click="router.push('/register')">
          Register
        </button>
      </template> -->
      <!-- <template v-else>
        <span>Welcome, {{ userName }}</span>
        <button class="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-sm font-medium" @click="handleLogout">
          Logout
        </button>
      </template> -->
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

const router = useRouter();
// const isLoggedIn = ref(false);
// const userName = ref("");

// const handleLogout = () => {
//   console.log("Logging out...");
//   localStorage.removeItem("authToken"); // ลบ token
//   localStorage.removeItem("userId"); // ลบ userId
//   localStorage.removeItem("user"); // ลบ user object
//   isLoggedIn.value = false;
//   userName.value = "";
//   router.push("/login"); // กลับไปหน้า Login
// };

// onMounted(async () => {
//   const token = localStorage.getItem("authToken");
//   const userId = localStorage.getItem("userId");

//   console.log("Token:", token); // Debug ค่า token
//   console.log("UserID:", userId); // Debug ค่า userId

//   if (!token || !userId) {
//     console.error("Token or UserID missing, logging out.");
//     handleLogout();
//     return;
//   }

//   try {
//     const response = await api.get(`/users/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     isLoggedIn.value = true;
//     userName.value = response.data.user.name;
//     console.log("User fetched successfully:", response.data.user);
//   } catch (error) {
//     console.error("Failed to fetch user data:", error.response?.data || error.message);
//     handleLogout();
//   }
// });
</script>
