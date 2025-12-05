<template>
  <section
    class="base-x-p max-w-[2000px] text-black text-center mx-auto mt-[160px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-8"
  >
    <h2 class="title">
      Discover Better Deals with
      <span class="sectitle">Intelligent</span> Signals
    </h2>
    <p class="description text-black mt-10 max-md:mt-7 max-w-[759px] mx-auto">
      Start using AI to find early stage opportunities, track market shifts, and
      stay ahead of emerging trends. IPO Genie gives you the insights you need
      to make faster and more confident investment decisions.
    </p>
    <div
      class="flex flex-wrap items-center justify-center gap-4 mt-10 max-md:mt-7"
    >
      <CustomButton
        text="Buy Now"
        bg-color="#16151A"
        arrow-color="#000"
        bg-arrow="#fff"
        text-color="#fff"
      />
      <CustomButton
        text="Read Whitepaper"
        bg-color="transparent"
        class="!w-max gap-5"
        text-color="#000"
        border-color="#000"
        arrow-color="#fff"
        bg-arrow="#FF5B00"
      />
    </div>
  </section>
</template>

<script setup>
import CustomButton from "@/ui/CustomButton.vue";
</script>
