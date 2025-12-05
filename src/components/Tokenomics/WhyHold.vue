<template>
  <section
    ref="sectionRef"
    class="base-x-p max-w-[2000px] flex flex-col items-center justify-center mt-[130px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10 mx-auto"
  >
    <h2 class="title mb-14 text-black text-center max-md:mb-5">
      Why <span class="sectitle">Hold</span> $IPO
    </h2>

    <!-- GRID -->
    <div
      class="grid lg:grid-cols-3 gap-8 max-md:gap-4 max-md:w-full relative max-md:h-[800px]"
      ref="cardsContainer"
    >
      <div
        v-for="(card, index) in holdCards"
        :key="index"
        class="bg-white process-card items-center max-md:w-full justify-center text-center rounded-3xl p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] border-[#EDEDED] border-[15px] relative overflow-hidden max-md:min-h-[520px]"
      >
        <!-- TAG -->
        <div
          class="w-max mx-auto bg-black text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          {{ card.tag }}
        </div>

        <div class="mt-8 flex flex-col items-center gap-3">
          <!-- TITLE -->
          <h3
            class="text-3xl max-w-[190px] font-bold tracking-tight text-black leading-tight"
            v-html="card.title"
          ></h3>

          <!-- IMAGE -->
          <div class="w-[190px] h-auto">
            <img :src="card.image" class="object-contain w-full h-full" />
          </div>

          <!-- TEXT -->
          <p class="text-sm text-black text-center">
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
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
const sectionRef = ref(null);
const cardsContainer = ref(null);

onMounted(() => {
  if (window.innerWidth >= 768) return;

  const cards = gsap.utils.toArray(".process-card");

  // Встановлюємо правильний порядок накладання
  gsap.set(cards, (card, i) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: cards.length - i,
  }));

  // Один pinned ScrollTrigger на всю секцію
  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress; // 0 → 1
      const totalCards = cards.length;

      cards.forEach((card, i) => {
        if (i === 0) return; // перша нерухома

        // Ділимо прогрес на "сегменти" для кожної картки
        const segmentStart = (i - 1) / (totalCards - 1);
        const segmentEnd = i / (totalCards - 1);

        let cardProgress =
          (progress - segmentStart) / (segmentEnd - segmentStart);
        cardProgress = Math.min(Math.max(cardProgress, 0), 1); // обмежуємо 0→1

        const offset = -(cards[0].offsetHeight - 100) * i;
        gsap.to(card, {
          y: offset * cardProgress,
          ease: "none",
          overwrite: "auto",
        });
      });
    },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
