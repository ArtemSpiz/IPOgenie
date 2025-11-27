<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import Bg from "@/assets/img/Home/LiveBg.png";

const LiveCards = [
  {
    number: "$100K+",
    title: "TOTAL RASED",
  },
  {
    number: "75M+",
    title: "TOKEN SOLD",
  },
  {
    number: "50M+",
    title: "TOKENS LEFT",
  },
  {
    number: "12th",
    title: "STAGE",
  },
  {
    number: "$0.00010210",
    title: "NEXT PRICE",
  },
];
</script>

<template>
  <div
    class="mt-[123px] relative base-x-p gap-[75px] pb-[120px] flex flex-col items-center max-xl:gap-[60px] max-xl:pb-[100px] max-lg:gap-[40px] max-lg:pb-[80px] max-md:gap-7 max-md:pb-[65px]"
  >
    <div
      class="w-full px-5 z-0 absolute bottom-0 right-0 h-auto object-contain max-md:px-3"
    >
      <img :src="Bg" class="rounded-[30px] overflow-hidden" />
    </div>

    <div class="flex flex-col z-10 gap-6 items-center text-center">
      <div class="flex flex-col gap-[18px] items-center">
        <div class="flex items-center gap-[30px] max-md:gap-2 max-lg:gap-5">
          <div
            class="bg-[#C30000] w-8 aspect-square rounded-full max-md:w-4"
          ></div>
          <div class="title text-center text-black gap-[30px]">
            Live Presale <span class="sectitle">Stats</span>
          </div>
        </div>
        <div class="description text-center text-black max-w-[570px]">
          Track real-time progress of the $IPO crypto presale and secure your
          allocation before the next price increase.
        </div>
      </div>

      <div
        class="grid grid-cols-5 md:flex gap-[10px] px-8 justify-center items-center flex-wrap max-md:grid-cols-2 w-full"
      >
        <div
          v-for="(card, index) in LiveCards"
          :key="index"
          class="px-[22px] min-w-[230px] flex flex-col gap-8 bg-white rounded-[30px] pt-16 pb-8 max-md:rounded-[20px] max-md:pt-8 max-md:pb-5 max-md:min-w-[unset] max-md:px-0 max-md:gap-6 max-md:w-full max-md:last:col-span-2"
        >
          <div
            class="text-[#FF5B00] font-semibold text-[54px] leading-[100%] whitespace-nowrap max-lg:text-5xl max-md:text-[32px]"
          >
            {{ card.number }}
          </div>

          <div
            class="text-[#000] font-semibold text-lg leading-[100%] whitespace-nowrap max-lg:text-base max-md:text-xs"
          >
            {{ card.title }}
          </div>
        </div>
      </div>
    </div>
    <CustomButton
      text="Buy Before Price Increase"
      arrow-color="#000"
      bg-color="#16151A"
      bg-arrow="#FF5B00"
      border-color="#000"
      class="!w-max gap-10 z-10 max-md:gap-2"
    />
  </div>
</template>

<style scoped></style>
