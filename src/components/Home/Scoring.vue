<script setup>
import Line from "@/assets/img/Home/ScoringLine.png";
import ScoringCardBg1 from "@/assets/img/Home/ScoringCardBg1.png";
import ScoringCardBg2 from "@/assets/img/Home/ScoringCardBg2.png";
import ScoringCardBg3 from "@/assets/img/Home/ScoringCardBg3.png";
import ScoringCardBg4 from "@/assets/img/Home/ScoringCardBg4.png";
import ScoringCardBg5 from "@/assets/img/Home/ScoringCardBg5.png";
import CustomButton from "@/ui/CustomButton.vue";

import ScoringCardBgMob1 from "@/assets/img/Home/ScoringCardBgMob1.png";
import ScoringCardBgMob2 from "@/assets/img/Home/ScoringCardBgMob2.png";
import ScoringCardBgMob3 from "@/assets/img/Home/ScoringCardBgMob3.png";
import ScoringCardBgMob4 from "@/assets/img/Home/ScoringCardBgMob4.png";

const isMobile = window.innerWidth < 768;
const ScoringCards = [
  {
    title: "Real-Time Market Intelligence",
    text: "AI tracks price action, liquidity, volatility, volume trends, and market sentiment across multiple chains to detect real opportunity strength.",
    bg: isMobile ? ScoringCardBgMob1 : ScoringCardBg1,
  },
  {
    title: "Team & Project Credibility Check",
    text: "AI verifies founders, advisors, past project data, transparency levels, and community activity to identify high-trust opportunities.",
    bg: isMobile ? ScoringCardBgMob2 : ScoringCardBg2,
  },
  {
    title: "Smart Contract & Risk Screening",
    text: "Automated audits detect vulnerabilities, fraud patterns, suspicious tokenomics, and red-flag behavior using decentralized AI services.",
    bg: isMobile ? ScoringCardBgMob3 : ScoringCardBg3,
  },
  {
    title: "Deal Score & Risk Profile",
    text: "Every opportunity receives a clear score backed by data - helping you choose the safest and strongest crypto presale opportunities.",
    bg: isMobile ? ScoringCardBgMob4 : ScoringCardBg4,
  },
  {
    btn: true,
    bg: ScoringCardBg5,
  },
];
</script>

<template>
  <div
    class="mt-[96px] max-w-[2000px] mx-auto base-x-p flex flex-col justify-center gap-9"
  >
    <div class="flex items-center gap-4">
      <div class="title text-black whitespace-nowrap">
        AI Deal <span class="sectitle">Scoring</span>
      </div>
      <div class="w-full h-auto">
        <img :src="Line" />
      </div>
    </div>

    <div
      class="grid grid-cols-4 gap-x-5 gap-y-7 max-[1400px]:grid-cols-2 max-[1400px]:grid-rows-2 max-md:flex max-md:flex-col"
    >
      <div
        v-for="(card, index) in ScoringCards"
        :key="index"
        :class="[
          'relative bg-center bg-no-repeat bg-cover px-[25px] flex transition-all duration-300 ease-in-out flex-col rounded-[20px]  ',
          card.btn
            ? 'col-span-4 max-[1400px]:col-span-2 max-[1400px]:order-5 items-end py-[18px] justify-end max-md:!p-0 max-md:items-center max-md:!bg-none'
            : 'pt-11 justify-center hover:shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)] gap-6 pb-[60px] max-md:h-[210px] max-md:pt-8 ',
        ]"
        :style="{ backgroundImage: `url(${card.bg})` }"
      >
        <div
          v-if="!card.btn"
          class="text-black text-[22px] font-semibold leading-[140%] max-lg:text-lg max-md:text-base"
        >
          {{ card.title }}
        </div>

        <div
          v-if="!card.btn"
          class="text-black text-lg leading-[140%] max-lg:text-base max-md:text-sm"
        >
          {{ card.text }}
        </div>

        <CustomButton
          v-if="card.btn"
          text="See How AI Scores Deals"
          arrow-color="#000"
          bg-color="#16151A"
          border-color="#000"
          class="!w-max gap-10"
          bg-arrow="#FF5B00"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
