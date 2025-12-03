<template>
  <section class="mt-20 text-center" id="tiers">
    <div class="mx-auto text-black max-w-4xl px-4">
      <h2 class="title">Access <span class="sectitle">Tiers</span></h2>
      <p class="mt-4 description">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default:
      "Forged from aerospace-grade steel. Optimized for global commerce. Choose your level of access.",
  },
});
</script>
