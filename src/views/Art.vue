<template>
  <div class="bg-white">
      <Navbar />
      <Content />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <!-- ใช้ ProductCard ในการแสดงสินค้า -->
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <BrowseStyle />
      <CustomerReviews />
      <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import api from "../api"; // Axios Instance
import Content from "../components/artcontent.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  discount?: number;
}

const products = ref<Product[]>([]);

// ฟังก์ชันดึงข้อมูลสินค้าและรูปภาพ
const fetchProducts = async () => {
  try {
      const productResponse = await api.get("/products");
      const productsData = productResponse.data;

      const imageResponse = await api.get("/product-images");
      const imagesData = imageResponse.data;

      products.value = productsData.map((product: any) => {
          const productImages = imagesData.filter(
              (image: any) => image.product_id === product.id
          );
          return {
              ...product,
              image: productImages.length > 0
                  ? productImages[0].image_url
                  : "https://via.placeholder.com/150",
          };
      });
  } catch (error) {
      console.error("Error fetching products or images:", error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
