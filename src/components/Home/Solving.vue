<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import Robot from "@/assets/img/Home/SolvingRobot.png";
</script>

<template>
  <div
    class="base-x-p max-w-[2000px] mx-auto flex flex-col items-center justify-center text-center gap-9 mt-[130px] max-2xl:mt-[100px] max-lg:gap-6 max-xl:mt-[80px] max-lg:mt-[60px] max-md:gap-4 max-md:mt-[30px]"
  >
    <div
      class="w-full relative rounded-[30px] px-[14px] flex flex-col items-center justify-center pt-[70px] gap-9 pb-9 bg-cover bg-no-repeat bg-[url('@/assets/img/Home/SolvingBg.png')] max-md:bg-[url('@/assets/img/Home/SolvingBgMob.png')] max-lg:pt-[55px] max-md:pt-[35px] max-lg:gap-7 max-md:gap-5 max-md:justify-start max-md:h-[460px]"
    >
      <div class="flex gap-[14px] z-10 flex-col items-center justify-center">
        <div class="title max-w-[1000px] max-md:!text-[30px]">
          Solving Web3’s Biggest Access Problem
        </div>
        <div class="text-sm leading-[143%] max-w-[715px] max-md:text-[10px]">
          Private-market investing has always been reserved for large funds,
          insider networks, and exclusive deal circles. Retail users almost
          never gain early access - and when opportunities do appear, the
          process is slow, unclear, and filled with risk.
        </div>
      </div>

      <div
        class="font-inter z-10 text-2xl font-extrabold leading-[70%] max-lg:text-lg max-md:text-base"
      >
        IPO Genie was built to solve this
      </div>

      <CustomButton
        text="See How AI Scores Deals"
        arrow-color="#000"
        bg-color="#16151A"
        border-color="#16151A"
        class="!w-max gap-10 max-md:gap-2"
        bg-arrow="#FF5B00"
      />

      <div
        class="absolute bottom-0 left-0 w-[300px] h-auto max-md:left-1/2 max-lg:w-[240px] max-md:bottom-[-15px] max-md:w-[175px] max-md:-translate-x-1/2"
      >
        <img :src="Robot" />
      </div>
    </div>

    <div class="description max-w-[1100px] text-black">
      IPO Genie exists to remove gatekeepers and replace outdated systems with
      fast, secure, and decentralized access to real investment opportunities -
      powered by next-generation AI blockchain technology designed for a more
      open financial future.
    </div>
  </div>
</template>

<style scoped></style>
