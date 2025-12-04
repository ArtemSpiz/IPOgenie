<template>
  <section
    class="pt-40 base-x-p max-w-[2000px] mx-auto max-md:pt-28 max-sm:pt-24"
  >
    <div
      class="text-center relative flex flex-col text-black items-center justify-center px-4"
    >
      <h1 class="title z-10 max-w-[600px]">
        Financial <span class="sectitle">Power</span>
        in your hand
      </h1>
      <p class="mt-6 description z-10 max-w-[570px] mx-auto">
        Forged from aerospace-grade steel. Optimized for global commerce. Choose
        your level of access.
      </p>

      <!-- Cards mockup image placeholder -->
      <div
        class="mt-4 flex z-10 w-[550px] h-auto justify-center max-md:max-w-[400px] max-md:w-auto"
      >
        <img :src="CardsHero" class="object-contain" loading="eager" />
      </div>
      <div
        class="bottom-[50px] absolute z-0 flex w-[550px] h-auto justify-center max-md:max-w-[400px] max-md:w-auto"
      >
        <img :src="HeroGrid" class="object-contain" />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardsHero from "@/assets/img/Wallet/HeroCards.png";
import HeroGrid from "@/assets/img/Wallet/HeroGrid.png";
</script>
