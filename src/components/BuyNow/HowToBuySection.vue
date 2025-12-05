<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import Bg from "../../assets/img/Home/HowBg.png";
import HowCard1 from "../../assets/img/Home/HowCard1.png";
import HowCard2 from "../../assets/img/Home/HowCard2.png";
import HowCard3 from "../../assets/img/Home/HowCard3.png";
import HowCard4 from "../../assets/img/Home/HowCard4.png";
import HowNum1 from "../../assets/img/Home/HowNum1.png";
import HowNum2 from "../../assets/img/Home/HowNum2.png";
import HowNum3 from "../../assets/img/Home/HowNum3.png";
import HowNum4 from "../../assets/img/Home/HowNum4.png";

const HowCards = [
  {
    number: HowNum1,
    img: HowCard1,
    title: "Connect Your Wallet",
    subtitle:
      "Use WalletConnect to link any Web3 wallet and get ready to join the crypto presale immediately.",
  },
  {
    number: HowNum2,
    img: HowCard2,
    title: "Choose Your Currency",
    subtitle:
      "Pay with <span class='font-bold'>ETH, USDT, BNB, MATIC, USDC</span> - all supported for fast, secure transactions.",
  },
  {
    number: HowNum3,
    img: HowCard3,
    title: "Enter Amount & Buy",
    subtitle:
      "Select your allocation and complete a verified on-chain transaction in seconds.",
  },
  {
    number: HowNum4,
    img: HowCard4,
    title: "Receive Your $IPO Tokens",
    subtitle:
      "Tokens are delivered safely to your wallet after purchase or at the end of the presale.",
  },
];
</script>

<template>
  <div
    class="flex flex-col base-x-p z-10 relative mt-[54px] items-center justify-center gap-16 max-lg:gap-10 max-md:gap-8"
  >
    <div class="text-black title text-center">
      How To Buy <span class="sectitle">IPO Genie</span>
    </div>
    <div
      class="flex items-center flex-wrap justify-center self-stretch gap-[10px] max-lg:gap-3 max-md:flex-col"
    >
      <div
        v-for="(card, index) in HowCards"
        :key="index"
        class="rounded-[20px] min-w-[300px] h-[222px] overflow-hidden bg-white relative flex flex-col justify-end px-6 pb-4 gap-1"
      >
        <div class="absolute z-[2] left-[-18px] top-2 w-auto h-[140px]">
          <img :src="card.number" class="object-contain" />
        </div>

        <div
          :class="[
            'absolute w-auto z-0 ',
            index === 0 && 'h-[203px] left-12 top-[-20px]',
            index === 1 &&
              'h-[50%] top-12 right-3 max-lg:h-[150px] max-lg:top-8 max-md:h-[127px]',
            index === 2 && 'h-[200px] top-0 left-12',
            index === 3 && 'h-[200px] top-0 left-16',
          ]"
        >
          <img :src="card.img" class="object-contain" />
        </div>

        <div
          class="text-black z-10 relative font-inter font-semibold tracking-[-0.64px] text-base"
        >
          {{ card.title }}
        </div>

        <p
          v-html="card.subtitle"
          class="text-black z-10 relative max-w-[238px] text-[10px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
