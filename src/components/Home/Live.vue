<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import Bg from "@/assets/img/Home/LiveBg.png";
import LiveCard1 from "@/assets/img/Home/LiveCard1.png";
import LiveCard3 from "@/assets/img/Home/LiveCard3.png";
import LiveCard4 from "@/assets/img/Home/LiveCard4.png";

const LiveCards = [
  {
    title: "TOTAL RASED",
    number: "$4,293,102",
    subtitle: "<span class='text-[#00CA5B]' >85.8%</span> of $5.0 M Goal",
    image: LiveCard1,
  },
  {
    title: "CURRENT PRICE",
    number: "$0.045",
    subtitle: "Next Stage: <span class='text-[#00CA5B]' >$0.050 (+11%)</span> ",
    btn: true,
  },
  {
    title: "INVESTORS",
    number: "12,405",
    subtitle: "<span class='text-[#00CA5B]' >+142 in last 24h</span>",
    image: LiveCard3,
  },
  {
    title: "TOKENS LEFT",
    number: "14.7M",
    subtitle: "at current price ($0.045)",
    image: LiveCard4,
  },
];
</script>

<template>
  <div
    class="mt-[123px] max-lg:mt-[70px] max-md:mt-16 relative base-x-p gap-9 pb-[120px] flex flex-col items-center max-xl:pb-[100px] max-lg:pb-[80px] max-md:pb-[65px]"
  >
    <div
      class="w-full px-5 z-0 absolute bottom-0 right-0 h-auto object-contain max-md:px-3"
    >
      <img :src="Bg" class="rounded-[30px] overflow-hidden" />
    </div>

    <div class="flex flex-col z-10 gap-9 items-center text-center max-md:gap-3">
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
        class="flex gap-[18px] justify-center items-center max-2xl:grid max-2xl:grid-cols-2 w-full max-md:gap-1"
      >
        <div
          v-for="(card, index) in LiveCards"
          :key="index"
          class="px-7 min-w-[265px] shadow-[0_4px_10px_2px_rgba(0,0,0,0.10)] h-[290px] justify-between flex items-start flex-col gap-8 bg-white rounded-[30px] py-5 max-md:rounded-[20px] max-md:py-4 max-md:px-3 max-md:h-full max-md:aspect-square max-md:min-w-[unset] max-md:w-full"
        >
          <div
            class="text-[#000] font-semibold text-lg leading-[100%] whitespace-nowrap max-lg:text-base max-md:text-xs"
          >
            {{ card.title }}
          </div>

          <div
            class="flex flex-col items-start justify-start gap-3 max-md:gap-2"
          >
            <div
              class="flex flex-col gap-[5px] items-start justify-start max-md:gap-0"
            >
              <div
                class="text-black font-semibold text-[38px] leading-[100%] whitespace-nowrap max-md:text-2xl"
              >
                {{ card.number }}
              </div>

              <p
                v-html="card.subtitle"
                class="text-black z-10 relative max-w-[453px] text-sm max-md:text-[10px]"
              />
            </div>

            <div
              :class="[
                { 'w-full h-[9px] max-md:h-[6px]': index === 0 },
                { 'w-auto h-[34px] max-md:h-5 max-md:w-[38px]': index === 2 },
                { 'w-full h-[5px]': index === 3 },
              ]"
              v-if="card.image"
            >
              <img :src="card.image" />
            </div>

            <button
              v-if="card.btn"
              class="w-full py-[11px] bg-[#FF5B00] flex items-center justify-center text-sm rounded-[10px] max-md:hidden"
            >
              STAGE 4 ENDING SOON
            </button>
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
