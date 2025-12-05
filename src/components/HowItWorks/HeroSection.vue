<template>
  <section
    class="pt-40 base-x-p max-w-[2000px] items-center flex flex-col mx-auto max-md:pt-28 max-sm:pt-26 text-center"
  >
    <h1 class="title text-black mb-9 max-md:mb-4 max-w-[540px]">
      Private Equity
      <span class="sectitle">Demystified</span>
    </h1>

    <p class="description text-black mb-16 max-w-[670px] max-md:mb-8">
      The old way required $250k, legal teams, and a 10-year lockup. The Genie
      way takes 5 minutes, $IPO tokens, and a single click.
    </p>

    <StepsGrid />

    <div class="mt-12 flex justify-center max-md:mt-4">
      <CustomButton text="Start Your Journey" class="!w-full gap-5" />
    </div>
  </section>
</template>

<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import StepsGrid from "./StepsGrid.vue";
</script>
