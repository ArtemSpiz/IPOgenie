<script setup>
import CustomButton from "@/ui/CustomButton.vue";

import InvestImg1 from "@/assets/img/Home/InvestImg1.png";
</script>

<template>
  <div
    class="h-[875px] relative justify-between items-center flex flex-col mt-[105px] max-lg:h-[600px] max-md:mt-[93px] max-md:h-[430px]"
  >
    <div
      class="text-black font-inter max-w-[800px] text-[150px] leading-[75%] tracking-[-6px] max-md:tracking-[-2px] text-center max-xl:text-[100px] max-lg:text-[80px] max-lg:max-w-[600px] max-md:text-[52px] max-md:max-w-[400px]"
    >
      AI Powered <span class="font-semibold italic">Marketplace</span>
    </div>

    <div
      class="absolute h-[600px] object-contain pointer-events-none w-auto top-[118px] right-1/2 translate-x-1/2 max-lg:top-[105px] max-lg:h-[350px] max-md:top-[60px] max-md:h-auto max-md:w-[370px]"
    >
      <img :src="InvestImg1" class="xl:object-contain" />
    </div>

    <div class="flex flex-col gap-8 items-center text-center max-md:gap-5">
      <div>
        <div class="description text-black">
          Presales don’t wait. Networks grow. Prices increase.
        </div>
        <div class="description text-black">
          Your best entry is always right now - before the next stage unlocks.
        </div>
      </div>

      <CustomButton
        text="Buy Before the Price Rises"
        class="!w-max gap-[6px] z-10 max-md:gap-[9px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
