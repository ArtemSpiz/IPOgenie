<template>
  <div class="antialiased selection:bg-orange selection:text-white bg-[#efefef]">
    <Header header-class="fixed top-6 left-0 right-0 z-50 px-4" />
    <main class="pt-40 md:pt-48">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'
</script>

