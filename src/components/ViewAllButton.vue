<template>
    <div class="text-center mt-4">
      <button
        class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        @click="handleClick"
      >
        View All
      </button>
    </div>
  </template>
  
  <script setup>
  defineEmits(['click']);
  
  function handleClick() {
    emit('click');
  }
  </script>
  