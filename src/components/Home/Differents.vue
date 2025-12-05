<script setup>
import DifferentsImg1 from "@/assets/img/Home/DifferentsImg1.png";
import DifferentsImg2 from "@/assets/img/Home/DifferentsImg2.png";
import DifferentsImg3 from "@/assets/img/Home/DifferentsImg3.png";
import DifferentsImg4 from "@/assets/img/Home/DifferentsImg4.png";
import DifferentsImgMob2 from "@/assets/img/Home/DifferentsImgMob2.png";

const isMobile = window.innerWidth < 1024;
const DifferentCards = [
  {
    title: "Institutional-Grade Standards",
    subtitle:
      "Real diligence. Real filters. No noise. Only opportunities that pass hard, fundamentals-first screening.",
    image: DifferentsImg1,
  },
  {
    title: "Founders with Operators DNA",
    subtitle:
      "People who’ve built and shipped. Execution over hype. Insights shaped by actual operators, not pitch decks.",
    image: isMobile ? DifferentsImgMob2 : DifferentsImg2,
  },
  {
    title: "Transparent, On-Chain, ",
    subtitle:
      "Clear terms, verifiable access, and a clean on-chain flow. No hidden steps. No friction. Just straight access to vetted private opportunities.",
    image: DifferentsImg3,
  },
  {
    title: "High-Conviction Dealflow",
    subtitle:
      "Zero crowdsourcing. Zero open submissions. Every deal is sourced, checked, and scored before it reaches your screen.",
    image: DifferentsImg4,
  },
];
</script>

<template>
  <div
    class="mt-[105px] max-w-[2000px] mx-auto base-x-p flex flex-col items-center justify-center gap-9 max-lg:gap-7 max-lg:mt-[80px] max-md:gap-[25px] max-md:mt-[60px]"
  >
    <div class="flex flex-col justify-center items-center text-center gap-5">
      <div class="title text-black">
        What Makes
        <span class="sectitle font-semibold">IPO Genie</span> Different
      </div>
      <div class="description text-black">
        1 Real diligence. Real filters. No noise. Only opportunities that pass
        hard, fundamentals-first screening.
      </div>
    </div>

    <div
      class="grid grid-cols-3 grid-rows-[repeat(4,180px)] gap-3 w-full max-xl:grid-cols-2 max-xl:grid-rows-[repeat(2,350px)] max-lg:flex max-lg:flex-col"
    >
      <div
        v-for="(card, index) in DifferentCards"
        :key="index"
        :class="[
          'text-black p-9 gap-5 overflow-hidden relative bg-white rounded-[20px] flex flex-col  max-xl:row-auto max-xl:col-auto max-lg:h-[440px] max-lg:p-[25px] max-lg:justify-end max-lg:items-center max-lg:text-center',

          index === 0 && 'col-span-2 row-span-3 max-xl:row-span-2 ',
          index === 1 && 'col-span-2 row-span-1 row-start-4',
          index === 2 && 'col-span-1 row-span-2 col-start-3 row-start-1',
          index === 3 && 'col-span-1 row-span-2 col-start-3 row-start-3',
        ]"
      >
        <div class="font-inter z-10 text-2xl font-extrabold">
          {{ card.title }}
        </div>
        <div class="max-w-[510px] z-10 text-lg leading-[142%]">
          {{ card.subtitle }}
        </div>

        <div
          :class="[
            'absolute max-lg:top-0 max-lg:right-1/2 max-lg:translate-x-1/2',
            {
              'w-[350px] h-auto right-0 bottom-0 max-xl:w-[180px] max-lg:h-[240px] max-lg:w-auto  max-lg:bottom-auto':
                index === 0,
            },
            {
              'w-auto h-full right-[-30px] bottom-0 max-xl:h-[150px] max-lg:w-full max-lg:h-[300px] max-lg:max-w-[400px]':
                index === 1,
            },
            {
              'w-[280px] rotate-[-15deg] aspect-square h-auto right-[-70px] bottom-[-100px] max-lg:rotate-0 max-lg:w-[300px] max-lg:bottom-auto':
                index === 2,
            },
            {
              'w-[370px] aspect-square  h-auto right-[-100px] bottom-[-110px] max-lg:w-[300px] max-lg:bottom-auto max-lg:!top-[-20px]':
                index === 3,
            },
          ]"
        >
          <img :src="card.image" class="object-contain"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
