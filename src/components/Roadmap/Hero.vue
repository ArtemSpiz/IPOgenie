<script setup>
import ArrowNext from "@/assets/icons/ArrowNext.vue";
import Energy from "@/assets/icons/Energy.vue";
import GenieNum1 from "@/assets/img/Home/GenieNum1.png";
import GenieNum2 from "@/assets/img/Home/GenieNum2.png";
import GenieNum3 from "@/assets/img/Home/GenieNum3.png";
import GenieNum4 from "@/assets/img/Home/GenieNum4.png";
import ArrowsNextPrev from "@/ui/ArrowsNextPrev.vue";
import CustomButton from "@/ui/CustomButton.vue";
import { ref } from "vue";

const RoadmapCards = [
  {
    title: "Strategic Foundation",
    subtitle:
      "Laying the groundwork for long-term growth through core infrastructure, partnerships, and early community activation.",
    points: [
      { point: "Global Marketing Campaigns" },
      { point: "Affiliate Program Release" },
      { point: "Public Presale Launch" },
      { point: "IPO Genie Dashboard" },
    ],
    number: GenieNum1,
  },
  {
    title: "Network Expansion",
    subtitle:
      "Scaling our reach and connectivity through ecosystem partnerships, liquidity integrations, and institutional readiness.",
    points: [
      { point: "Partner Fund Activation" },
      { point: "Fund-as-a-Service (FaaS)" },
      { point: "CEX Onboarding and Listings" },
      { point: "Core IPO Genie Infrastructure" },
    ],
    number: GenieNum2,
  },
  {
    title: "Intelligent Investing Era",
    subtitle:
      "Integrating automation, intelligence, and risk management to power a smarter, data-driven investment experience.",
    points: [
      { point: "IPO Genie AI Signal Agents" },
      { point: "$IPO-Backed Insurance Vaults Live" },
      { point: "Plug-and-Play Tokenization Suite" },
      { point: "Insurance Pool Beta Launch" },
    ],
    number: GenieNum3,
  },
  {
    title: "Infinite Deal Flow",
    subtitle:
      "Unlocking the full ecosystem potential through open tools, education, and real-time portfolio innovation.",
    points: [
      { point: "Fund Builder SDK Release" },
      { point: "Academy Beta" },
      { point: "Real-Time Tokenized Portfolios" },
      { point: "Mobile App Launch" },
    ],
    number: GenieNum4,
  },

  {
    title: "Strategic Foundation 5",
    subtitle:
      "Laying the groundwork for long-term growth through core infrastructure, partnerships, and early community activation.",
    points: [
      { point: "Global Marketing Campaigns" },
      { point: "Affiliate Program Release" },
      { point: "Public Presale Launch" },
      { point: "IPO Genie Dashboard" },
    ],
    number: GenieNum1,
  },
  {
    title: "Network Expansion 6",
    subtitle:
      "Scaling our reach and connectivity through ecosystem partnerships, liquidity integrations, and institutional readiness.",
    points: [
      { point: "Partner Fund Activation" },
      { point: "Fund-as-a-Service (FaaS)" },
      { point: "CEX Onboarding and Listings" },
      { point: "Core IPO Genie Infrastructure" },
    ],
    number: GenieNum2,
  },
];

const carousel = ref(null);
let touchStartX = 0;

const scrollStep = 350 + 18;

const scrollNext = () => {
  if (carousel.value) carousel.value.scrollLeft += scrollStep;
};

const scrollPrev = () => {
  if (carousel.value) carousel.value.scrollLeft -= scrollStep;
};

const startSwipe = (e) => {
  touchStartX = e.changedTouches[0].clientX;
};

const endSwipe = (e) => {
  const diff = e.changedTouches[0].clientX - touchStartX;

  if (Math.abs(diff) > 50) {
    diff < 0 ? scrollNext() : scrollPrev();
  }
};
</script>

<template>
  <div
    class="flex gap-11 max-w-[2055px] mx-auto flex-col base-x-p mt-[160px] max-xl:mt-[180px] max-lg:mt-[120px] max-md:mt-28 max-md:gap-5"
  >
    <div class="flex text-black text-center items-center flex-col z-10 gap-5">
      <div class="title max-w-[540px]">
        The Master <span class="sectitle">Plan</span>
      </div>
      <div class="description max-w-[670px]">
        From concept to global ecosystem. Follow our journey as we build the
        future of decentralized private equity.
      </div>
    </div>

    <div
      ref="carousel"
      class="flex gap-[18px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      @touchstart="startSwipe"
      @touchend="endSwipe"
    >
      <div
        v-for="(card, i) in RoadmapCards"
        :key="i"
        class="group relative bg-white flex-shrink-0 snap-start w-[350px] h-[415px] rounded-[20px] px-8 overflow-hidden transition-all duration-500"
      >
        <img
          :src="card.number"
          class="absolute right-0 top-[60px] w-auto h-[136px] transition-all duration-500 group-hover:top-[10px]"
        />

        <div
          class="flex flex-col gap-5 absolute left-0 right-0 top-[160px] px-8 transition-all duration-500 group-hover:top-[50px]"
        >
          <div
            class="font-inter text-black text-2xl font-extrabold leading-[85%]"
          >
            {{ card.title }}
          </div>

          <div class="w-[80px] h-[5px] rounded-sm bg-[#FF5B00]"></div>

          <div class="text-black opacity-70 text-sm leading-[142%]">
            {{ card.subtitle }}
          </div>

          <div
            class="flex flex-col gap-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
          >
            <div
              v-for="point in card.points"
              class="py-2 px-3 flex items-center gap-2 bg-[#EFEFEF] rounded-[10px]"
            >
              <Energy />
              <span class="text-black text-sm">{{ point.point }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center justify-center">
      <CustomButton text="Start Your Journey" class="!w-max gap-5" />
    </div>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
}

* {
  -webkit-tap-highlight-color: transparent;
}
</style>
