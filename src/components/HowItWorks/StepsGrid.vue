<template>
  <div class="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
    <StepCard
      v-for="(step, index) in steps"
      :key="step.number"
      :number="step.number"
      :title="step.title"
      :description="step.description"
      :icon="step.icon"
      :index="index"
    />
  </div>
</template>

<script setup>
import StepCard from "./StepCard.vue";
import HeroIcon1 from "@/assets/img/HowItWorks/HeroIcon1.png";
import HeroIcon2 from "@/assets/img/HowItWorks/HeroIcon2.png";
import HeroIcon3 from "@/assets/img/HowItWorks/HeroIcon3.png";
import HeroIcon4 from "@/assets/img/HowItWorks/HeroIcon4.png";
import Num1 from "@/assets/img/Home/GenieNum1.png";
import Num2 from "@/assets/img/Home/GenieNum2.png";
import Num3 from "@/assets/img/Home/GenieNum3.png";
import Num4 from "@/assets/img/Home/GenieNum4.png";

const steps = [
  {
    number: Num1,
    title: "Acquire & Stake",
    description:
      "Buy $IPO tokens during our Fair Launch Tokenomics presale. Stake them in our dApp to unlock your DAO Governance Rights and reveal your Access Tier.",
    icon: HeroIcon1,
  },
  {
    number: Num2,
    title: "Browse & Vet",
    description:
      "Access the Deal Marketplace. Browse Vetted Crypto Deals and Pre-IPO unicorns. Review our institutional-grade due diligence reports.",
    icon: HeroIcon2,
  },
  {
    number: Num3,
    title: "Invest",
    description:
      "Allocate USDC or USDT into the deals you love. Our smart contracts handle the legal wrapper instantly. You receive a representative token.",
    icon: HeroIcon3,
  },
  {
    number: Num4,
    title: "Manage & Exit",
    description:
      "Track your portfolio in real-time. When you're ready, trade your position on our secondary market for instant liquidity.",
    icon: HeroIcon4,
  },
];
</script>
