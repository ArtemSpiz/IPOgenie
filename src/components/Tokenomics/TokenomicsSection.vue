<template>
  <section
    class="mt-10 base-x-p text-center justify-center max-w-[2000px] mx-auto"
  >
    <h2 class="title mb-10 text-black">
      Fair Launch <span class="sectitle">Tokenomics</span>
    </h2>
    <h3
      class="text-2xl md:text-4xl font-semibold tracking-tight text-black mb-5"
    >
      A Community-First Economy
    </h3>
    <p class="description max-w-[865px] mx-auto mb-[100px] text-black">
      We believe in putting the power back in the hands of the investors. That's
      why 50% of our total supply is reserved strictly for the presale. No
      hidden whales. No rug pulls. Just a community-driven launch. $IPO is a
      Deflationary Utility Token built for long-term value.
    </p>
    <div
      class="flex flex-col lg:flex-row gap-12 gap-x-12 gap-y-12 items-center justify-center"
    >

      <!-- Allocation Table -->
      <div class="w-full max-w-2xl">
        <div class="flex items-center gap-4">
          <div
            class="bg-[#FF5B00] text-white font-medium py-4 px-10 rounded-[10px] text-center"
          >
            Allocation
          </div>
          <div
            class="bg-[#FF5B00] text-white font-medium py-4 px-10 rounded-[10px] text-center"
          >
            % of Supply
          </div>
          <div
            class="bg-[#FF5B00] text-white font-medium py-4 px-10 rounded-[10px] text-center"
          >
            Strategy
          </div>
        </div>
        <div class="rounded-[10px] mt-3 flex flex-col border border-black">
          <div
            v-for="(allocation, index) in allocations"
            :key="index"
            class="flex flex-col"
          >
            <div
              :class="[
                'h-px w-full bg-black',
                index === allocations.length ? 'hidden' : 'flex',
              ]"
            ></div>
            <div class="grid grid-cols-3 gap-0 items-center">
              <div class="py-4 px-6 font-medium text-black">
                {{ allocation.name }}
              </div>
              <div class="py-4 px-6 font-bold text-black text-center">
                {{ allocation.percentage }}
              </div>
              <div class="py-4 px-6 text-black text-start text-sm">
                {{ allocation.strategy }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const allocations = ref([
  {
    name: "Presale",
    percentage: "50%",
    strategy: "Immediately available. The engine of the ecosystem.",
  },
  {
    name: "Liquidity",
    percentage: "20%",
    strategy: "Reserved for DEX/CEX listings to ensure smooth trading.",
  },
  {
    name: "Rewards",
    percentage: "18%",
    strategy: "Released based on milestones. We pay you to participate.",
  },
  {
    name: "Staking",
    percentage: "7%",
    strategy: "Distributed to long-term holders via our staking pools.",
  },
  {
    name: "Team",
    percentage: "5%",
    strategy: "100% Locked for 2 Years. We are in this for the long haul.",
  },
]);
</script>
