<script setup>
import CustomButton from "@/ui/CustomButton.vue";
</script>

<template>
  <section
    class="pt-40 base-x-p max-w-[2000px] mx-auto max-md:pt-28 max-sm:pt-24"
  >
    <div
      class="bg-[url('@/assets/img/Tokenomics/HeroBg.png')] bg-cover bg-right bg-no-repeat rounded-3xl overflow-hidden relative min-h-[550px] flex items-center max-md:min-h-[420px] max-sm:min-h-[360px] max-md:bg-[url('@/assets/img/Tokenomics/HeroBgMob.png')] max-md:items-start"
    >
      <div
        class="md:pl-16 max-w-[785px] z-10 pl-10 relative max-md:p-6 max-sm:p-5 max-sm:pb-8"
      >
        <!-- TITLE -->
        <h1 class="title">
          The <span class="sectitle">Oil</span> in the Lamp: What
          <span class="sectitle">Fuels</span> the Genie
        </h1>

        <!-- TEXT -->
        <p
          class="text-white/90 text-lg max-md:text-base max-sm:text-sm mt-3 max-sm:mt-2"
        >
          $IPO isn't just a token. It's your bridge between blockchain and
        </p>
        <p
          class="text-white font-semibold text-lg max-md:text-base max-sm:text-sm mb-8 max-sm:mb-6"
        >
          Tokenized Private Equity.
        </p>

        <!-- BUTTON -->
        <CustomButton class="!w-max gap-3" text="Join the Presale" />
      </div>
    </div>
  </section>
</template>
