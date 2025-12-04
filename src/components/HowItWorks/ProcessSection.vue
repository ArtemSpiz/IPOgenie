<template>
  <section
    ref="sectionRef"
    class="max-w-[2000px] base-x-p mt-[112px] max-lg:mt-[80px] max-md:mt-10 mx-auto px-4 text-center min-h-[180vh]"
  >
    <div ref="stickyContainer" class="sticky top-0 py-20">
      <h2 class="title mb-6 mx-auto max-w-[680px] text-black">
        How We Tokenize
        <span class="sectitle">the World</span>
      </h2>
      <p class="description text-black mb-16 max-md:mb-10">{{ subtitle }}</p>

      <div
        ref="cardsContainer"
        class="relative flex flex-col items-center justify-center h-[205px]"
      >
        <div
          v-for="(process, index) in processes"
          :key="index"
          :ref="(el) => (cardRefs[index] = el)"
          class="process-card absolute w-full max-w-[600px]"
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
const stickyContainer = ref(null);
const cardsContainer = ref(null);
const cardRefs = ref([]);

onMounted(() => {
  const cards = cardRefs.value;
  const isMobile = window.innerWidth < 768;
  const offsetX = isMobile ? 0 : -40;

  // Початкові позиції
  gsap.set(cards[0], { y: 0, x: 0 }); // Перша картка по центру
  gsap.set(cards[1], { y: 250, x: offsetX }); // Друга картка внизу
  gsap.set(cards[2], { y: 490, x: offsetX * 2 }); // Третя картка внизу

  // Створюємо ScrollTrigger для пінінгу секції
  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: "top top",
    end: "bottom bottom",
    pin: stickyContainer.value,
    pinSpacing: false,
  });

  // Перша картка залишається на місці (без анімації)

  // Друга картка накриває першу, залишаючи 80px зверху
  gsap.to(cards[1], {
    y: 80,
    x: offsetX,
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top top",
      end: "top+=400 top",
      scrub: 1,
    },
  });

  // Третя картка накриває другу, залишаючи 80px від другої
  gsap.to(cards[2], {
    y: 160,
    x: offsetX * 2,
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top+=400 top",
      end: "top+=800 top",
      scrub: 1,
    },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.process-card {
  transition: all 0.3s ease;
}
</style>
