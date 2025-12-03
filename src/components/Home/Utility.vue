<script setup>
import IPOcardImg1 from "@/assets/img/Home/IPOcardImg1.png";
import IPOcardImg2 from "@/assets/img/Home/IPOcardImg2.png";
import IPOcardImg3 from "@/assets/img/Home/IPOcardImg3.png";
import IPOcardImg4 from "@/assets/img/Home/IPOcardImg4.png";
import IPOcardImg5 from "@/assets/img/Home/IPOcardImg5.png";
import Coin from "@/assets/img/Home/IPOcoin.png";

import IPOblur1 from "@/assets/img/Home/IPOblur1.png";
import IPOblur2 from "@/assets/img/Home/IPOblur2.png";
import IPOblur3 from "@/assets/img/Home/IPOblur3.png";
import IPOblur4 from "@/assets/img/Home/IPOblur4.png";
import IPOblur5 from "@/assets/img/Home/IPOblur5.png";

const IPOcards = [
  {
    title: "Lower Fees",
    subtitle:
      "Enjoy reduced fees across all on-chain actions and platform features.",
    line: IPOcardImg1,
    blur: IPOblur1,
  },
  {
    title: "Staking Rewards",
    subtitle: "Earn passive income by staking $IPO for long-term growth.",
    line: IPOcardImg2,
    blur: IPOblur2,
  },
  {
    title: "Early Deal Access",
    subtitle:
      "Get priority entry into private-market opportunities and upcoming presale rounds.",
    line: IPOcardImg3,
    blur: IPOblur3,
  },
  {
    title: "Tier Unlocks",
    subtitle:
      "Holding more $IPO unlocks higher rewards, better allocations, and VIP presale access.",
    line: IPOcardImg4,
    blur: IPOblur4,
  },
  {
    title: "Governance Rights",
    subtitle: "Vote on ecosystem upgrades and future development decisions.",
    line: IPOcardImg5,
    blur: IPOblur5,
  },
];
</script>

<template>
  <div
    class="mt-[94px] flex flex-col gap-14 max-w-[1600px] base-x-p mx-auto max-xl:gap-10 max-lg:gap-5 max-md:gap-3"
  >
    <div class="flex flex-col gap-[18px] items-center max-md:gap-4">
      <div class="title text-center text-black">
        $IPO Token <span class="sectitle">Utility</span>
      </div>
      <div
        class="description text-center text-black max-w-[570px] max-lg:max-w-[400px]"
      >
        The $IPO token powers the entire IPO Genie ecosystem and gives early
        buyers strong crypto presale benefits.
      </div>
    </div>

    <div
      class="flex items-start relative justify-center h-[600px] max-lg:gap-4 max-lg:h-max max-lg:flex-col max-lg:items-center"
    >
      <div class="h-[350px] w-auto aspect-square max-md:h-[248px]">
        <img :src="Coin" />
      </div>

      <div class="max-lg:flex max-lg:flex-wrap justify-center gap-[10px]">
        <div
          v-for="(card, index) in IPOcards"
          :key="index"
          :class="[
            'rounded-[15px] absolute flex flex-col bg-[#FF5B00] px-5 py-8 gap-5 max-lg:static max-lg:bg-white transition-all duration-300 ease-in-out  hover:shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)] max-lg:py-2 max-lg:gap-1 max-lg:items-center max-lg:text-center',
            {
              'top-0 left-[-5%]': index === 0,
              'top-0 right-[-5%]': index === 1,
              'bottom-[100px] left-[-5%] ': index === 2,
              'bottom-0 right-1/2 translate-x-1/2 max-lg:translate-x-0':
                index === 3,
              'bottom-[150px] right-[-5%]': index === 4,
            },
          ]"
        >
          <div
            class="absolute z-0 rounded-full overflow-hidden h-full w-auto max-lg:hidden"
            :class="[
              {
                'bottom-0 right-0': index === 0,
                'bottom-0 left-0': index === 1,
                'top-0 right-0 ': index === 2,
                'top-0 right-1/2 translate-x-1/2': index === 3,
                'top-0 left-0': index === 4,
              },
            ]"
          >
            <img :src="card.blur" />
          </div>

          <div
            class="text-[22px] z-10 font-semibold !leading-[140%] max-lg:text-lg max-md:text-base max-lg:text-black"
          >
            {{ card.title }}
          </div>
          <div
            class="text-xs z-10 max-w-[245px] max-xl:max-w-[150px] tracking-[-0.2px] max-md:text-[10px] max-lg:text-black max-lg:max-w-[250px]"
          >
            {{ card.subtitle }}
          </div>
          <div
            :class="[
              'absolute w-auto max-lg:hidden',
              { 'top-[50px] right-[-42%] max-xl:right-[-65%]': index === 0 },
              { 'top-[50px] left-[-42%] max-xl:left-[-55%]': index === 1 },
              { 'bottom-[70px] right-[-42%] max-xl:right-[-55%]': index === 2 },
              { 'top-[-30%] right-1/2 translate-x-1/2': index === 3 },
              { 'bottom-[50px] left-[-42%] max-xl:left-[-50%]': index === 4 },
            ]"
          >
            <img :src="card.line" class="object-contain max-h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
