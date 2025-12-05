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
    subtitle: "Stage 05",
  },
  {
    title: "INVESTORS",
    number: "12,405",
    subtitle: "<span class='text-[#00CA5B]' >+142 in last 24h</span>",
    image: LiveCard3,
  },
  {
    title: "NEXT PRICE",
    number: "$0.072",
    subtitle: "Next Stage 06",
  },
];
</script>

<template>
  <div class="relative">
    <div
      class="flex gap-[18px] justify-center items-center max-2xl:grid max-2xl:grid-cols-2 w-full max-md:gap-1"
    >
      <div
        v-for="(card, index) in LiveCards"
        :key="index"
        class="px-7  shadow-[0_4px_10px_2px_rgba(0,0,0,0.10)] h-[240px] justify-between flex items-start flex-col gap-8 bg-white rounded-[30px] py-5 max-md:rounded-[20px] max-md:py-4 max-md:px-3 max-md:h-full max-md:aspect-square max-md:min-w-[unset] max-md:w-full"
      >
        <div
          class="text-[#000] font-semibold text-lg leading-[100%] whitespace-nowrap max-lg:text-base max-md:text-xs"
        >
          {{ card.title }}
        </div>

        <div class="flex flex-col items-start justify-start gap-3 max-md:gap-2">
          <div
            class="flex flex-col gap-[5px] items-start justify-start max-md:gap-0"
          >
            <div
              class="text-black font-semibold text-[38px] leading-[100%] whitespace-nowrap max-xl:text-3xl max-lg:text-2xl"
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
