<template>
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-center mb-6">{{ title }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <ViewAllButton @click="onViewAll" />
    </div>
  </template>
  
  <script setup>
  import ProductCard from './ProductCard.vue';
  import ViewAllButton from './ViewAllButton.vue';
  
  defineProps({
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  });
  
  defineEmits(['view-all']);
  
  function onViewAll() {
    emit('view-all');
  }
  </script>
  