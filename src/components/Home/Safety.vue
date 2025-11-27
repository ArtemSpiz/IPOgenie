<script setup>
import Logo1 from "@/assets/img/Home/logoPartner1.png";
import Logo2 from "@/assets/img/Home/logoPartner2.png";

const SafetyCards = [
  {
    logo: Logo1,
    title: "External Smart Contract Audit by SolidProof",
    text: "IPO Genie’s smart contracts have been fully audited by SolidProof, ensuring secure, transparent, and reliable operations throughout the crypto presale and beyond.",
  },
  {
    logo: Logo2,
    title: "Built to CertiK-Level Security Standards",
    text: "Our blockchain architecture follows the same rigorous standards used by top security firms, ensuring protection against vulnerabilities during token purchases and on-chain transactions.",
  },
];
</script>

<template>
  <div
    class="base-x-p flex flex-col items-center gap-[70px] mt-20 max-w-[2000px] mx-auto z-10 relative max-lg:gap-14 max-md:gap-[25px] max-md:text-[25px] max-md:mt-[70px]"
  >
    <div
      class="flex flex-col items-center text-center gap-7 max-lg:gap-4 max-md:gap-[9px]"
    >
      <div class="title text-black text-center">
        Your <span class="sectitle font-semibold">Safety</span> Comes First
      </div>
      <div
        class="text-black font-inter text-[60px] italic font-semibold leading-[80%] tracking-[-2.4px] max-lg:text-[40px] max-md:text-2xl max-md:tracking-[-0.9px]"
      >
        (Fully Verified)
      </div>
    </div>

    <div
      class="flex self-stretch gap-10 max-lg:gap-5 max-md:gap-3 max-lg:flex-col"
    >
      <div
        v-for="(card, index) in SafetyCards"
        :key="index"
        class="flex-1 flex flex-col justify-between items-start rounded-[20px] bg-black h-[305px] px-10 py-8 max-lg:gap-[50px] max-md:px-6 max-md:py-[26px]"
      >
        <div class="h-11 w-auto max-md:h-[26px]">
          <img :src="card.logo" class="object-contain" />
        </div>

        <div class="flex flex-col gap-3 max-md:gap-[6px]">
          <div
            class="font-inter text-2xl font-extrabold max-lg:text-lg max-md:text-base"
          >
            {{ card.title }}
          </div>
          <div class="text-sm max-md:text-[10px] tracking-[-0.2px] leading-[142%]">
            {{ card.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
