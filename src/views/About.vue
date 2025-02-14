<template>
    <Navbar />
    <div class="container mx-auto px-10 py-10 text-center">
        <h1 class="text-3xl font-bold mb-6">About Us</h1>
        <p class="mb-10 text-gray-600">
            This project was created by three passionate developers. Below is a brief introduction to the team.
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center space-y-20 md:space-y-0 md:space-x-10">
            <!-- Developer 1 -->
             <div class="text-center">
                <img src="../assets/images/NN.jpg" alt="Developer 2" class="w-30 h-30 rounded-full mx-auto mb-4" />
                <h2 class="text-xl font-semibold">Ms Phonenida Sinsamoud </h2>
                <h2 class="text-xl "> Computer Science</h2>
                <h2 class="text-xl "> Web development</h2>
                <h2 class="text-xl ">Class 3Cw1</h2>
                <p class="text-gray-600">Frontend Specialist</p>
            </div>
             <!-- Developer 2 -->
            <div class="text-center">
                <img src="../assets/images/Jimmy.jpg" alt="Developer 1" class="w-90 h-90  rounded-full mx-auto mb-4" />
                <h2 class="text-xl font-semibold">Mr Southavy Sengdavong</h2>
                <h2 class="text-xl "> Computer Science</h2>
                <h2 class="text-xl "> Web development</h2>
                <h2 class="text-xl ">Class 3Cw1</h2>
                <p class="text-gray-600">Full-Stack Developer</p>
            </div>
            
            <div class="text-center">
                <img src="../assets/images/Big.jpg" alt="Developer 3" class="w-90 h-90 rounded-full  mx-auto mb-4" />
                <h2 class="text-xl font-semibold">Mr Xaythideth Sourivong </h2>
                <h2 class="text-xl "> Computer Science</h2>
                <h2 class="text-xl "> Web development</h2>
                <h2 class="text-xl ">Class 3Cw1</h2>
                <p class="text-gray-600">Frontend Specialist</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
// ไม่มี logic พิเศษในหน้า About
</script>

<style scoped>
.container {
    max-width: 1000px;
}

img {
    border: 2px solid #ddd;
    padding: 4px;
}

</style>