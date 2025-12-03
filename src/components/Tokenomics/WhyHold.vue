<template>
  <section
    class="base-x-p max-w-[2000px] flex flex-col items-center justify-center mt-[130px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10 mx-auto"
  >
    <h2 class="title mb-14 text-black text-center">
      Why <span class="sectitle">Hold</span> $IPO
    </h2>

    <!-- GRID -->
    <div class="grid lg:grid-cols-3 gap-8 max-md:gap-4">
      <div
        v-for="(card, index) in holdCards"
        :key="index"
        class="bg-white items-center justify-center text-center rounded-3xl p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] border-[#EDEDED] border-[15px] relative overflow-hidden max-md:p-6 max-sm:p-5"
      >
        <!-- TAG -->
        <div
          class="w-max mx-auto bg-black text-white px-4 py-2 rounded-md text-sm font-semibold max-sm:text-xs"
        >
          {{ card.tag }}
        </div>

        <div class="mt-8 flex flex-col items-center gap-3">
          <!-- TITLE -->
          <h3
            class="text-3xl max-w-[190px] font-bold tracking-tight text-black leading-tight max-md:text-2xl max-sm:text-xl"
            v-html="card.title"
          ></h3>

          <!-- IMAGE -->
          <div
            class="w-[190px] h-auto max-lg:w-[230px] max-md:w-[200px] max-sm:w-[180px]"
          >
            <img :src="card.image" class="object-contain w-full h-full" />
          </div>

          <!-- TEXT -->
          <p class="text-sm text-black text-center max-sm:text-xs">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import WhyHoldImg1 from "@/assets/img/Tokenomics/WhyHoldImg1.png";
import WhyHoldImg2 from "@/assets/img/Tokenomics/WhyHoldImg2.png";
import WhyHoldImg3 from "@/assets/img/Tokenomics/WhyHoldImg3.png";

const holdCards = [
  {
    tag: "Access",
    title: "Deal Flow <span class='italic font-semibold'>Access</span>",
    image: WhyHoldImg1,
    description:
      "Holding $IPO is your ticket to the VIP room. Get priority access to Vetted Crypto Deals and pre-spot unicorns before the general public.",
  },
  {
    tag: "Earnings",
    title: "<span class='italic font-semibold'>Staking</span> & Yield",
    image: WhyHoldImg2,
    description:
      "Put your $IPO to work. Stake your tokens to earn high Crypto Staking Rewards APY and compound your holdings while you sleep.",
  },
  {
    tag: "Governance",
    title: "Shape the <span class='italic font-semibold'>Future</span>",
    image: WhyHoldImg3,
    description:
      "$IPO holders don't just watch; they steer. Exercise your DAO Governance Rights to vote on platform upgrades and the future of the Genie ecosystem.",
  },
];
</script>
