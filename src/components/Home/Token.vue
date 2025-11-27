<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import Cards from "@/assets/img/Home/TokenCards.png";
import Blur from "@/assets/img/Home/TokenBlur.png";
import GridBg from "@/assets/img/Home/TokenGridBg.png";
import GridBg2 from "@/assets/img/Home/TokenGridBg2.png";
import GridBgMob from "@/assets/img/Home/TokenGridBgMob.png";
import GridBgMob2 from "@/assets/img/Home/TokenGridBg2Mob.png";

const isMobile = window.innerWidth < 768;
</script>

<template>
  <div
    class="px-5 mt-[190px] max-xl:mt-[100px] max-lg:mt-[60px] max-md:mt-[42px] max-md:px-4"
  >
    <div
      class="relative w-full items-center flex flex-col gap-9 rounded-[40px] max-md:rounded-[30px] overflow-hidden h-[740px] bg-[#16151A] max-lg:h-[600px] max-md:h-[460px]"
    >
      <div class="absolute pointer-events-none z-10 top-0 left-0 h-full">
        <img :src="isMobile ? GridBgMob : GridBg" class="object-cover" />
      </div>

      <div class="absolute pointer-events-none z-10 top-0 right-0 h-full">
        <img :src="isMobile ? GridBgMob2 : GridBg2" class="object-cover" />
      </div>

      <div
        class="flex flex-col z-10 gap-[18px] items-center pt-24 max-md:gap-4 max-lg:pt-20 max-md:pt-16"
      >
        <div class="title text-center">
          The $IPO <span class="sectitle">Token</span>
        </div>
        <div class="description text-center max-w-[570px] max-lg:max-w-[400px]">
          The $IPO token powers the entire IPO Genie ecosystem and gives early
          buyers strong crypto presale benefits.
        </div>
      </div>

      <div class="flex z-20 items-center gap-4 max-md:gap-[9px]">
        <CustomButton text="Buy $IPO Now" />
        <CustomButton
          text="View Whitepaper"
          arrow-color="#000"
          bg-color="transparent"
          bg-arrow="#fff"
          border-color="#fff"
          class="!w-max gap-3"
        />
      </div>

      <div
        class="absolute z-10 max-w-[760px] min-w-[400px] right-1/2 translate-x-1/2 bottom-0"
      >
        <img :src="Cards" />
      </div>

      <div
        class="absolute z-0 max-lg:hidden right-1/2 translate-x-1/2 bottom-0 max-md:hidden"
      >
        <img :src="Blur" class="object-contain h-[315px] w-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
