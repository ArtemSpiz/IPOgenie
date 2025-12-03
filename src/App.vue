<script setup>
import { useRoute } from "vue-router";
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
import { computed } from "vue";

const route = useRoute();

const hasBg = computed(() => route.path !== "/");
</script>

<template>
  <Header :color-bg="hasBg" />
  <router-view />
  <Footer />
</template>
