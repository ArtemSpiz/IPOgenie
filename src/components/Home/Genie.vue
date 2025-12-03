<script setup>
import GenieIcon1 from "@/assets/img/Home/GenieIcon1.png";
import GenieIcon2 from "@/assets/img/Home/GenieIcon2.png";
import GenieIcon3 from "@/assets/img/Home/GenieIcon3.png";
import GenieIcon4 from "@/assets/img/Home/GenieIcon4.png";
import Num1 from "@/assets/img/Home/GenieNum1.png";
import Num2 from "@/assets/img/Home/GenieNum2.png";
import Num3 from "@/assets/img/Home/GenieNum3.png";
import Num4 from "@/assets/img/Home/GenieNum4.png";

const GenieCards = [
  {
    icon: GenieIcon1,
    number: Num1,
    title: "Hold IPO",
    subtitle:
      "Unlock early access and activate your benefits inside the private-market investment ecosystem.",
  },
  {
    icon: GenieIcon2,
    number: Num2,
    title: "Curated Opportunities",
    subtitle:
      "Every deal passes through multi-layer vetting: fundamentals, technology, market fit, team strength, and risk checks, so you only see high-quality opportunities.",
  },
  {
    icon: GenieIcon3,
    number: Num3,
    title: "Track, Earn, Influence",
    subtitle:
      "Monitor project progress in real time, earn rewards for your engagement, and participate in shaping platform decisions.",
  },
  {
    icon: GenieIcon4,
    number: Num4,
    title: "Invest With Confidence",
    subtitle:
      "Make decisions based on transparent scoring, clear risk analysis, and data-driven evaluations, not hype or noise.",
  },
];
</script>

<template>
  <div
    class="px-[22px] z-50 pointer-events-auto 0 mt-[132px] max-xl:mt-[100px] max-lg:mt-[60px] max-md:mt-9"
  >
    <div
      class="px-5 max-w-[2000px] mx-auto rounded-[40px] overflow-hidden py-14 h-full min-h-[681px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-[url('@/assets/img/Home/GenieBg.png')] max-lg:bg-cover max-lg:bg-top max-lg:bg-[url('@/assets/img/Home/GenieBgMob.png')]"
    >
      <div
        class="flex flex-col items-start gap-[34px] max-2xl:items-center max-md:gap-[75px]"
      >
        <div
          class="flex px-2 flex-col items-start text-center gap-[22px] max-2xl:items-center max-2xl:text-center max-2xl:justify-center"
        >
          <div class="title">
            How <span class="sectitle font-semibold">IPO Genie</span> Works
          </div>
          <div class="description px-2">
            IPO Genie simplifies early-stage investing into a transparent,
            data-driven process anyone can follow.
          </div>
        </div>

        <div
          class="flex base-x-p items-center max-2xl:flex-wrap justify-center self-stretch gap-[30px]"
        >
          <div
            v-for="(card, index) in GenieCards"
            :key="index"
            class="p-[22px] flex w-max flex-col gap-[26px] relative overflow-hidden pb-8 bg-[#EFEFEF] max-h-[360px] rounded-[20px] h-full"
          >
            <div
              class="bg-[#FCFCFC] h-[180px] relative rounded-[15px] w-[265px]"
            >
              <div
                :class="[
                  'absolute translate-x-1/2 right-1/2 bottom-3',
                  { 'w-[252px] !bottom-0': index === 1 },
                  { 'w-[190px]': index === 2 },
                  { 'w-[235px] !bottom-0': index === 3 },
                ]"
              >
                <img :src="card.icon" />
              </div>
            </div>

            <div class="absolute bottom-[10px] right-0">
              <img :src="card.number" class="w-auto h-[136px] object-contain" />
            </div>

            <div class="flex flex-col gap-[10px]">
              <div class="font-inter font-extrabold text-black text-2xl">
                {{ card.title }}
              </div>
              <div class="text-black text-xs max-w-[250px] !leading-[140%]">
                {{ card.subtitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
