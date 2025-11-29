<script setup>
import TokenomicsImg1 from "@/assets/img/Home/TokenomicsImg1.png";
import TokenomicsImg2 from "@/assets/img/Home/TokenomicsImg2.png";
import TokenomicsImg3 from "@/assets/img/Home/TokenomicsImg3.png";
import TokenomicsImg4 from "@/assets/img/Home/TokenomicsImg4.png";
import TokenomicsImg5 from "@/assets/img/Home/TokenomicsImg5.png";

const TokenomicsCards = [
  {
    percents: "50%",
    name: "Presale",
    text: "Available for crypto presale participants with stage-based pricing.",
    image: TokenomicsImg1,
  },

  {
    percents: "20%",
    name: "Liquidity & Exchanges",
    text: "Allocated to DEX/CEX liquidity to support smooth trading and stability.",
    image: TokenomicsImg2,
  },

  {
    percents: "18%",
    name: "Community Rewards",
    text: "Released gradually based on ecosystem growth, activity, and milestones.",
    image: TokenomicsImg3,
  },
  {
    percents: "7%",
    name: "Staking Rewards",
    text: "Released gradually based on ecosystem growth, activity, and milestones.",
    image: TokenomicsImg4,
  },
  {
    percents: "5%",
    name: "Team",
    text: "Released gradually based on ecosystem growth, activity, and milestones.",
    image: TokenomicsImg5,
  },
];

const TokenomicsPoints = [
  {
    title: "437B",
    subtitle: "Maximum amount of Coins",
    line: true,
  },
  {
    title: "ERC-20",
    subtitle: "Token Standard",
    line: true,
  },
  {
    title: "2 years",
    subtitle: "Team Vesting Time",
  },
];
</script>

<template>
  <div
    class="flex mt-[185px] flex-col gap-[60px] base-x-p max-xl:mt-[120px] max-lg:gap-12 max-lg:mt-[100px] max-md:gap-9 max-md:mt-[95px]"
  >
    <div class="title max-lg:hidden text-black">Tokenomics</div>
    <div
      class="w-full flex justify-between px-[75px] relative py-14 bg-white rounded-[40px] max-lg:h-[926px] max-lg:flex-col max-lg:justify-between max-lg:px-[40px] max-lg:py-6 max-md:px-[10px] max-md:rounded-[20px]"
    >
      <div class="title w-full justify-center max-lg:flex hidden text-black">
        Tokenomics
      </div>

      <div class="flex gap-6 flex-col max-2xl:max-w-[50%] max-lg:max-w-full">
        <div
          class="font-inter text-black flex leading-[80%] text-[32px] font-extrabold max-lg:text-2xl max-lg:w-full max-lg:justify-center"
        >
          Global Token Distribution
        </div>
        <div class="flex flex-col gap-[10px] max-lg:gap-[5px]">
          <div
            v-for="(card, i) in TokenomicsCards"
            :key="i"
            class="flex flex-col"
          >
            <div
              class="text-lg w-max rounded-lg font-extrabold px-3 py-1 bg-[#16151A] flex whitespace-nowrap flex-nowrap"
            >
              {{ card.percents }} - {{ card.name }}
            </div>
            <div class="text-black text-sm leading-[140%]">{{ card.text }}</div>
          </div>
        </div>
      </div>

      <div
        v-for="(card, i) in TokenomicsCards"
        :key="i"
        class="w-[530px] right-[-20px] top-1/2 -translate-y-1/2 h-[350px] absolute max-2xl:w-[480px] max-2xl:h-[270px] max-lg:right-1/2 max-lg:translate-x-1/2 max-lg:top-[300px] max-md:top-[250px] max-md:w-[355px]"
      >
        <div
          :class="[
            'absolute',
            {
              'right-[80px] top-1/2 -translate-y-1/2 h-[315px] w-auto max-2xl:h-[250px] max-md:h-[200px] ':
                i === 0,
            },
            {
              'left-[140px] bottom-0 w-[140px] h-auto max-2xl:w-[100px] max-2xl:left-[170px] max-md:w-[80px] max-md:left-[90px] max-md:bottom-[30px]':
                i === 1,
            },
            {
              'left-[88px] top-[52%] -translate-y-1/2 w-[135px] h-auto max-2xl:w-[100px] max-2xl:top-[57%] max-2xl:left-[120px] max-md:w-[80px] max-md:left-[50px] max-md:top-[54%]':
                i === 2,
            },
            {
              'left-[160px] top-[25px] w-[100px] h-auto max-2xl:w-[70px] max-2xl:left-[170px] max-md:w-[60px] max-md:left-[90px] max-md:top-[40px]':
                i === 3,
            },
            {
              'right-1/2 top-[-10px] translate-x-1/2 w-[100px] h-auto max-2xl:w-[70px] max-2xl:right-[49%] max-2xl:top-[-5px] max-md:w-[60px] max-md:top-[20px] max-md:right-[57%]':
                i === 4,
            },
          ]"
        >
          <img :src="card.image" />
        </div>

        <div
          :class="[
            'absolute ',
            {
              'right-[25px] top-1/2 -translate-y-1/2': i === 0,
            },
            { 'left-[110px] bottom-[-40px] max-2xl:left-[120px]': i === 1 },
            {
              'left-[15px] top-[52%] -translate-y-1/2 max-2xl:left-[40px] max-md:top-[86%] max-md:left-[10px]':
                i === 2,
            },
            { 'left-[110px] top-[-10px] max-md:left-[50px]': i === 3 },
            {
              'right-[55%] top-[-55px] translate-x-1/2 max-md:top-[-30px] max-md:right-[60%]':
                i === 4,
            },
          ]"
        >
          <div class="text-black text-sm font-medium max-w-[80px]">
            {{ card.name }}
          </div>
          <div
            :class="[
              'text-sm w-max font-medium py-1 px-3 rounded-lg max-md:text-xs',
              { 'bg-[#FF5B00]': i === 0 },
              { 'bg-[#FF7C33]': i === 1 },
              { 'bg-[#FF9D66]': i === 2 },
              { 'bg-[#FFBD99]': i === 3 },
              { 'bg-[#FFDECC]': i === 4 },
            ]"
          >
            {{ card.percents }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex items-center self-stretch justify-center max-md:flex-col max-md:gap-7"
    >
      <div
        v-for="(card, index) in TokenomicsPoints"
        :key="index"
        class="flex items-center"
      >
        <div
          class="flex flex-col text-center items-center gap-6 max-lg:gap-4 max-md:gap-1"
        >
          <div
            class="text-black text-[100px] font-inter font-extrabold leading-[80%] max-2xl:text-[70px] max-lg:text-[50px]"
          >
            {{ card.title }}
          </div>
          <div
            class="text-black text-lg font-inter font-semibold leading-[140%] max-lg:text-base max-md:text-xs"
          >
            {{ card.subtitle }}
          </div>
        </div>

        <div
          v-if="card.line"
          class="h-[160px] w-px bg-[#737373] mx-[76px] max-xl:mx-[20px] max-lg:mx-[10px] max-md:hidden"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
