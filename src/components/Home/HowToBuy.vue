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
    class="mt-[70px] pt-[70px] relative max-lg:pt-[50px] max-md:mt-[60px] max-md:pt-[35px]"
  >
    <div class="w-full px-5 z-0 absolute top-0 right-0 h-auto object-contain">
      <img :src="Bg" class="rounded-[30px] overflow-hidden" />
    </div>

    <div
      class="flex flex-col base-x-p z-10 relative items-center justify-center gap-16 max-lg:gap-10 max-md:gap-8"
    >
      <div class="title text-center">
        How To <span class="sectitle">Buy</span>
      </div>
      <div
        class="grid grid-cols-2 px-[14px] gap-x-[30px] gap-y-[15px] self-stretch max-lg:gap-3 max-lg:flex max-lg:flex-col"
      >
        <div
          v-for="(card, index) in HowCards"
          :key="index"
          class="rounded-[30px] h-[308px] overflow-hidden bg-white relative flex flex-col justify-end px-10 pb-5 gap-[10px] max-lg:gap-[5px] max-md:rounded-[20px] max-md:h-[222px]"
        >
          <div
            class="absolute top-10 z-[2] left-0 max-lg:left-[-20px] max-lg:top-2"
          >
            <img
              :src="card.number"
              class="w-auto h-[160px] object-contain max-md:h-[140px]"
            />
          </div>

          <div
            :class="[
              'absolute w-auto z-0 object-contain',
              index === 0 && 'h-[283px] top-2 left-12 max-lg:top-[-20px]',
              index === 1 &&
                'h-[50%] top-12 right-3 max-lg:h-[150px] max-lg:top-8 max-md:h-[127px]',
              index === 2 && 'h-[300px] top-0 left-12 max-md:top-[-50px]',
              index === 3 && 'h-full top-0 left-16',
            ]"
          >
            <img :src="card.img" class="object-contain" />
          </div>

          <div
            class="text-black z-10 relative text-2xl font-inter font-semibold tracking-[-0.96px] max-md:tracking-[-0.64px] max-lg:text-lg max-md:text-base"
          >
            {{ card.title }}
          </div>

          <p
            v-html="card.subtitle"
            class="text-black z-10 relative max-w-[453px] text-sm max-md:text-[10px]"
          />
        </div>
      </div>

      <div class="flex items-center gap-4 max-md:gap-[9px]">
        <CustomButton bg-color="#16151A" arrow-color="#000" to="/how-to-buy" />
        <CustomButton
          text="Read Whitepaper"
          arrow-color="#fff"
          bg-color="transparent"
          bg-arrow="#FF5B00"
          border-color="#000"
          text-color="#000"
          class="!w-max gap-5"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
