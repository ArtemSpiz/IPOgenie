<template>
  <section class="max-w-[2000px] base-x-p mx-auto">
    <div class="text-center mb-16 items-center flex flex-col">
      <h2 class="title mb-6 max-w-[590px] text-black">
        Your Key to the
        <span class="sectitle">VIP Room</span>
      </h2>
      <p class="description text-black max-w-2xl mx-auto">
        Holding more $IPO unlocks earlier access, guaranteed allocations, and
        Tokenized Real World Assets.
      </p>
    </div>

    <div
      class="flex gap-4 max-2xl:grid max-2xl:grid-cols-2 max-md:flex max-md:flex-col"
    >
      <div
        v-for="(card, i) in TiersCards"
        :key="i"
        :class="[
          'relative flex-1 min-w-[320px]  px-[30px] h-full min-h-[490px] pb-10 rounded-[20px] pt-[70px] border',
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
        <div class="text-black font-inter font-semibold text-2xl mb-10">
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
</script>
