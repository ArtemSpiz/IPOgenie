<template>
  <nav class="mx-auto max-w-7xl px-4 py-4">
    <div class="bg-black/5 backdrop-blur-lg rounded-3xl px-4 sm:px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17 8l-5 3-5-3 5-3.5zM6 9.5l5 3v6l-5-3v-6zm12 0v6l-5 3v-6l5-3z"></path>
          </svg>
        </div>
        <span class="text-lg sm:text-xl font-bold tracking-tight">
          IPO Genie
        </span>
      </div>
      <div class="hidden lg:flex items-center gap-10">
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Platform
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Deals
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Token
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          How It Works
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Track Record
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          FAQ
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Contact
        </a>
      </div>
      <button class="hidden sm:block bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-medium hover:bg-orange-600 transition-colors text-sm sm:text-base">
        Join Now
      </button>
      <button 
        class="lg:hidden p-2"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <line v-if="!mobileMenuOpen" x1="3" y1="12" x2="21" y2="12"></line>
          <line v-if="!mobileMenuOpen" x1="3" y1="6" x2="21" y2="6"></line>
          <line v-if="!mobileMenuOpen" x1="3" y1="18" x2="21" y2="18"></line>
          <line v-if="mobileMenuOpen" x1="18" y1="6" x2="6" y2="18"></line>
          <line v-if="mobileMenuOpen" x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen"
      class="lg:hidden bg-white rounded-3xl mt-4 p-6 shadow-lg"
    >
      <div class="flex flex-col gap-4">
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Platform
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Deals
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Token
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          How It Works
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Track Record
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          FAQ
        </a>
        <a href="#" class="text-black text-lg hover:text-orange-500 transition-colors">
          Contact
        </a>
        <button class="bg-orange-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-orange-600 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
