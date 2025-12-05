<template>
  <section
    class="base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]"
  >
    <div class="mx-auto">
      <div class="text-center mb-10 max-lg:mb-6 max-md:mb-[18px]">
        <h2 class="title text-black">
          Institutional <span class="font-semibold italic">Intelligence</span>
        </h2>
        <p class="description text-black mt-4 max-md:mt-3">
          Four pillars of technology designed to give you an unfair advantage in
          private markets.
        </p>
      </div>
      <div
        class="bg-white rounded-[30px] p-5 max-md:py-8 md:p-12 grid md:grid-cols-2 gap-12 max-md:gap-8 max-md:rounded-[20px]"
      >
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="flex items-start gap-4 max-md:gap-3"
        >
          <div class="shrink-0 w-[30px] aspect-square max-md:w-6">
            <img :src="pillar.icon" class="object-contain" />
          </div>
          <div>
            <h3
              class="font-['Inter'] font-extrabold text-xl tracking-tight text-black"
            >
              {{ pillar.title }}
            </h3>
            <p class="text-lg text-black mt-3 tracking-[-0.2px] leading-[140%]">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon1 from "@/assets/img/RePages/IntelligenceIcon1.png";
import Icon2 from "@/assets/img/RePages/IntelligenceIcon2.png";
import Icon3 from "@/assets/img/RePages/IntelligenceIcon3.png";
import Icon4 from "@/assets/img/RePages/IntelligenceIcon4.png";

const pillars = [
  {
    icon: Icon1,
    title: "Intelligent Deal Sourcing",
    description:
      "Evaluates founder history, product traction, and technical momentum to identify high-potential opportunities.",
  },
  {
    icon: Icon2,
    title: "Real-Time Market Signals",
    description:
      "Sentient Signal Agents monitor millions of data points including funding rounds and GitHub activity in real time.",
  },
  {
    icon: Icon3,
    title: "Continuous Due Diligence",
    description:
      "Tracks KPI changes and risk indicators constantly. If conditions improve or deteriorate, you're alerted instantly.",
  },
  {
    icon: Icon4,
    title: "Adaptive Learning Engine",
    description:
      "Learns from your investment behavior to tailor deal recommendations and filter out irrelevant noise.",
  },
];
</script>
