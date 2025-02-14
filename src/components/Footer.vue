<template>
    <footer class="bg-gray-100">
        <!-- Newsletter Subscription -->
        <div class="bg-black text-white py-8 px-6 text-center sm:text-left">
            <div
                class="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <h3 class="text-2xl font-bold">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
                <div class="flex space-x-4 w-full sm:w-auto">
                    <div class="flex-1">
                        <input type="email" placeholder="Enter your email address"
                            class="w-full px-4 py-2 rounded-full text-black focus:outline-none" />
                    </div>
                    <button class="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer Links -->
        <div class="py-10 px-6">
            <div class="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                <!-- About Section -->
                <div>
                    <h4 class="font-bold text-lg mb-4">SHOP.CO</h4>
                    <p class="text-gray-600">
                        We have clothes that suit your style and which you're proud to wear. From women to men.
                    </p>
                    <div class="flex space-x-4 mt-4">
                        <a href="#" class="text-gray-600 hover:text-black">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-600 hover:text-black">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="text-gray-600 hover:text-black">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <!-- Company Links -->
                <div>
                    <h4 class="font-bold text-lg mb-4">COMPANY</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-black">About</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Features</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Works</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Career</a></li>
                    </ul>
                </div>

                <!-- Help Links -->
                <div>
                    <h4 class="font-bold text-lg mb-4">HELP</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-black">Customer Support</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Delivery Details</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Terms & Conditions</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Privacy Policy</a></li>
                    </ul>
                </div>

                <!-- Resources Links -->
                <div>
                    <h4 class="font-bold text-lg mb-4">RESOURCES</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-black">Free eBooks</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Development Tutorial</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">How to - Blog</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-black">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="bg-gray-200 py-4 px-6 text-center sm:text-left">
            <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <p class="text-gray-600 text-sm">
                    ShopCo © 2000-2025, All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>