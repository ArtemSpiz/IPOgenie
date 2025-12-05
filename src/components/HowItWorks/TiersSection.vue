<template>
  <section
    ref="sectionRef"
    class="max-w-[2000px] base-x-p mx-auto mt-[110px] max-lg:mt-20 max-md:mt-14"
  >
    <div class="text-center mb-16 items-center flex flex-col max-md:mb-8">
      <h2 class="title mb-6 max-w-[590px] text-black max-md:max-w-[250px]">
        Your Key to the
        <span class="sectitle">VIP Room</span>
      </h2>
    </div>

    <div
      ref="cardsContainer"
      class="flex gap-4 max-2xl:grid max-2xl:grid-cols-2 max-2xl:max-w-[800px] mx-auto max-2xl:gap-y-8 max-md:flex max-md:flex-col relative max-md:h-[700px]"
    >
      <div
        v-for="(card, i) in TiersCards"
        :key="i"
        :class="[
          'relative flex-1 bg-[#EFEFEF] process-card min-w-[320px]  px-[30px] h-full min-h-[490px] pb-10 rounded-[20px] pt-[70px] max-md:mt-[50px] border max-md:min-h-[450px]',
          card.orange ? 'border-[#FF5B00]' : 'border-black',
        ]"
      >
        <div
          :class="[
            'absolute top-0 -translate-y-1/2 right-10 px-3 py-[10px] rounded-[10px] font-inter text-lg',
            card.orange ? 'bg-[#FF5B00]' : 'bg-black',
          ]"
        >
          {{ card.type }}
        </div>
        <div
          class="text-black font-inter font-extrabold leading-[85%] text-[32px] mb-3"
        >
          {{ card.name }}
        </div>
        <div
          class="text-black font-inter font-semibold text-2xl mb-10 max-md:mb-6"
        >
          {{ card.price }}
        </div>
        <div class="flex flex-col gap-3">
          <div
            v-for="tier in card.subtitles"
            class="flex text-lg font-inter text-black items-center gap-2"
          >
            <CheckMark fill-color="#FF5B00" /> {{ tier.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CheckMark from "@/assets/icons/CheckMark.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TiersCards = [
  {
    type: "Core Access",
    name: "Bronze",
    price: "Hold 2500 $IPO",
    subtitles: [
      { subtitle: "Access to vetted startups" },
      { subtitle: "Basic deal analytics" },
      { subtitle: "Community forum access" },
      { subtitle: "Monthly newsletter" },
      { subtitle: "Secondary market trading" },
    ],
  },
  {
    type: "Priority Access",
    name: "Silver",
    price: "Hold 10,000 $IPO",
    subtitles: [
      { subtitle: "Everything in Silver" },
      { subtitle: "AI Powered due diligence report" },
      { subtitle: "Early access to deals (24h)" },
      { subtitle: "Discounted platform fees" },
      { subtitle: "Quarterly investor calls" },
    ],
  },
  {
    orange: true,
    type: "Popular",
    name: "Gold",
    price: "Hold 50,000 $IPO",
    subtitles: [
      { subtitle: "Everything in Gold" },
      { subtitle: "Priority deal allocation" },
      { subtitle: "Private investor network" },
      { subtitle: "Index fund access" },
      { subtitle: "Personal investment dashboard" },
      { subtitle: "Direct founder Q&A" },
    ],
  },
  {
    orange: true,
    type: "Premium",
    name: "Platinum",
    price: "Hold 250,000 $IPO",
    subtitles: [
      { subtitle: "Everything is premium" },
      { subtitle: "Exclusive institutional deals" },
      { subtitle: "White-glove concierge service" },
      { subtitle: "Custom SPV creation" },
      { subtitle: "Co-investment opportunities" },
      { subtitle: "Annual strategy summit invite" },
      { subtitle: "Zero platform fees" },
    ],
  },
];

const sectionRef = ref(null);
const cardsContainer = ref(null);
let scrollTriggerTiers = null;

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
  scrollTriggerTiers = ScrollTrigger.create({
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

        const offset = -(cards[0].offsetHeight + 20) * i;
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
  if (scrollTriggerTiers) scrollTriggerTiers.kill();
});
</script>
