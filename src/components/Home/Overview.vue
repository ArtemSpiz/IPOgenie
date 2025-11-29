<script setup>
import ArrowReadMore from "@/assets/icons/ArrowReadMore.vue";
import OverviewIcon1 from "@/assets/img/Home/OverviewIcon1.png";
import OverviewIcon2 from "@/assets/img/Home/OverviewIcon2.png";
import OverviewIcon3 from "@/assets/img/Home/OverviewIcon3.png";
import OverviewIcon4 from "@/assets/img/Home/OverviewIcon4.png";
import OverviewIcon5 from "@/assets/img/Home/OverviewIcon5.png";
import OverviewIcon6 from "@/assets/img/Home/OverviewIcon6.png";
import Line from "@/assets/img/Home/OverviewLine.png";

const OverviewCards = [
  {
    icon: OverviewIcon1,
    title: "AI Powered Deal Discovery",
    text: "Traditional VC relies heavily on personal networks and subjective judgment. IPO Genie replaces that with an intelligent AI engine that continuously scans, evaluates, and refines deal flow.",
  },
  {
    icon: OverviewIcon2,
    title: "White-Labeled Fund-as-a-Service (FaaS)",
    text: "Many DAOs, angel syndicates, and accelerators have strong communities and deal flow but lack the legal, compliance, and technical infrastructure needed to run a professional investment fund.",
  },
  {
    icon: OverviewIcon3,
    title: "IPO Index Funds (Wrapped Token Baskets)",
    text: "Diversification is a cornerstone of smart investing — but in private markets, it’s long been out of reach. IPO Genie changes that with Index Funds.",
  },
  {
    icon: OverviewIcon4,
    title: "Behavior-Based Staking & Rewards",
    text: "IPO Genie is reinventing staking by moving beyond passive holding rewards to a dynamic, behavior-driven model powered by real-time on-chain data and AI.",
  },
  {
    icon: OverviewIcon5,
    title: "Deal Builder Marketplace",
    text: "IPO Genie’s Deal Builder Marketplace puts deal sourcing into the hands of the community—operators, scouts, analysts, and founders alike. By staking $IPO.",
  },
  {
    icon: OverviewIcon6,
    title: "IPO Backed Insurance Pools",
    text: "Investing in private markets is risky—scams, failed projects, and rug pulls happen. IPO Genie introduces $IPO-backed insurance, giving you a built-in safety net so you can invest with confidence.",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-24 justify-center base-x-p mt-[190px] max-xl:mt-[100px] max-xl:gap-16 max-lg:mt-[70px] max-lg:gap-12 max-md:mt-[50px] max-md:gap-8"
  >
    <div class="title text-black">
      Technology <span class="sectitle">Overview</span>
    </div>

    <div class="flex flex-col gap-5 self-stretch">
      <div
        v-for="(card, index) in OverviewCards"
        :key="index"
        class="flex flex-col gap-4 max-md:gap-[5px]"
      >
        <div
          class="flex gap-3 justify-between items-start min-h-[130px] max-md:flex-col max-md:h-max"
        >
          <div class="flex flex-1 gap-5 items-center max-md:gap-4">
            <div class="w-16 h-16 max-lg:w-[30px] max-lg:h-[30px]">
              <img :src="card.icon" />
            </div>
            <div
              class="text-black font-inter text-[24px] font-extrabold leading-[85%] max-w-[350px] max-lg:text-xl max-md:text-lg max-md:max-w-[200px] max-md:leading-[120%]"
            >
              {{ card.title }}
            </div>
          </div>
          <div
            class="description text-black flex-1 max-w-[510px] max-md:!text-[10px]"
          >
            {{ card.text }}
          </div>
        </div>

        <div class="flex justify-end">
          <button
            class="flex gap-3 items-center text-black text-xl max-lg:text-base max-md:text-[10px] max-md:gap-2"
          >
            Read More <ArrowReadMore />
          </button>
        </div>

        <div class="w-full h-auto"><img :src="Line" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
