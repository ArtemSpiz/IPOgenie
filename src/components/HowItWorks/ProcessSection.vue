<template>
  <section
    ref="sectionRef"
    class="max-w-[2000px] base-x-p mt-[112px] max-lg:mt-[80px] mx-auto px-4 text-center max-md:mt-[60px] max-md:h-[380px]"
  >
    <h2 class="title mb-6 mx-auto max-w-[680px] text-black">
      How We Tokenize
      <span class="sectitle">the World</span>
    </h2>
    <p class="description text-black mb-16 max-md:mb-10">{{ subtitle }}</p>

    <div
      ref="cardsContainer"
      class="relative flex flex-col items-center justify-center gap-5 max-md:gap-0"
    >
      <div
        v-for="(process, index) in processes"
        :key="index"
        class="process-card-sec w-full max-w-[600px] min-h-[190px]"
        :style="{
          zIndex: index + 1,
        }"
      >
        <ProcessCard
          :title="process.title"
          :description="process.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProcessCard from "./ProcessCard.vue";

gsap.registerPlugin(ScrollTrigger);

defineProps({
  subtitle: {
    type: String,
    default: "We turn paper shares into digital power",
  },
});

const processes = [
  {
    title: "Sourcing",
    description:
      "We buy the actual shares (Equity) in high-growth companies via our SPV (Special Purpose Vehicle).",
  },
  {
    title: "Wrapping",
    description:
      "We wrap these shares in a compliant legal structure and mint a digital token representing them on the blockchain.",
  },
  {
    title: "Delivery",
    description:
      "You buy the token. You own the economic rights to the underlying shares. Secure, transparent, and tradeable.",
  },
];

const sectionRef = ref(null);
const cardsContainer = ref(null);
let scrollTriggerInstance = null;
const isMobile = window.innerWidth < 768;

onMounted(() => {
  const cards = gsap.utils.toArray(".process-card-sec");
  const offsetY = isMobile
    ? cards[0].offsetHeight - 40
    : cards[0].offsetHeight - 80;
  const offsetX = isMobile ? -10 : -40; // горизонтальне зміщення

  // Встановлюємо правильний порядок накладання
  gsap.set(cards, (card, i) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: cards.length - i,
  }));

  scrollTriggerInstance = ScrollTrigger.create({
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

        const yOffset = -offsetY * i;
        const xOffset = offsetX * i;

        gsap.to(card, {
          y: yOffset * cardProgress,
          x: xOffset, // додаємо горизонтальне зміщення
          ease: "none",
          overwrite: "auto",
        });
      });
    },
  });
});

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill();
});
</script>
