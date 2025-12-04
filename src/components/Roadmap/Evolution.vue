<script setup>
import lineEvol from "@/assets/img/Roadmap/lineEvol.png";

const EvolutionCards = [
  {
    number: "01",
    type: "Sourcing",
    title: "Deal Sourcing",
    text: "Our network never sleeps.",
  },
  {
    number: "02",
    type: "Security",
    title: "Audits & Bounties",
    text: "Regular audits and bounty programs.",
  },
  {
    number: "03",
    type: "Community",
    title: "Global Events",
    text: "Global events, AMAs, and education.",
  },
];
</script>

<template>
  <div
    class="base-x-p max-w-[2000px] mx-auto flex items-center max-md:flex-col max-md:gap-6 gap-12 mt-[120px] max-lg:mt-16 max-md:mt-10"
  >
    <div class="flex-1 text-black">
      <div class="title max-w-[370px] mb-9 max-md:mb-5">
        Constant <span class="sectitle">Evolution</span>
      </div>
      <div class="description mb-6 max-md:mb-3">
        Milestones are moments in time. Our work is a continuous state of flow.
        Here is the non-roadmap of things we do every single day.
      </div>

      <div class="flex items-center gap-2">
        <div class="h-4 w-auto">
          <img :src="lineEvol" class="object-contain"/>
        </div>
        <div class="text-lg text-black leading-[140%] whitespace-nowrap">
          ON GOING OPERATIONS
        </div>
      </div>
    </div>

    <div class="flex-1 grid grid-cols-2 gap-4 max-md:flex max-md:flex-col max-md:w-full">
      <div
        v-for="(card, i) in EvolutionCards"
        :key="i"
        :class="[
          'border border-[#FF5C01] rounded-[10px] px-6 py-[30px] max-md:w-full',
          i === 0 ? 'bg-[#FF5C01] text-white' : 'bg-white text-black',
          i === 0 && 'col-span-2',
        ]"
      >
        <div class="text-lg italic leading-[140%] mb-1">
          {{ card.number }} - {{ card.type }}
        </div>
        <div class="text-2xl font-bold leading-[140%]">
          {{ card.title }}
        </div>
        <div class="text-sm leading-[140%]">
          {{ card.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
