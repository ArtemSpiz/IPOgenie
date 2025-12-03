<script setup>
import OpportunitiesImg1 from "@/assets/img/Home/OpportunitiesImg1.png";
import OpportunitiesImg2 from "@/assets/img/Home/OpportunitiesImg2.png";
import OpportunitiesImg3 from "@/assets/img/Home/OpportunitiesImg3.png";
import OpportunitiesImg4 from "@/assets/img/Home/OpportunitiesImg4.png";

import OpportunitiesName1 from "@/assets/img/Home/OpportunitiesName1.png";
import OpportunitiesName2 from "@/assets/img/Home/OpportunitiesName2.png";
import OpportunitiesName3 from "@/assets/img/Home/OpportunitiesName3.png";
import OpportunitiesName4 from "@/assets/img/Home/OpportunitiesName4.png";
import CustomButton from "@/ui/CustomButton.vue";

const OpportunitiesCards = [
  {
    image: OpportunitiesImg1,
    price: "$2500",
    name: OpportunitiesName1,
    text: "Access to core deals, basic staking rewards",
  },
  {
    image: OpportunitiesImg2,
    price: "$12,000",
    name: OpportunitiesName2,
    text: "Priority allocations, enhanced staking APY",
  },
  {
    image: OpportunitiesImg3,
    price: "$55,000",
    name: OpportunitiesName3,
    text: "Early access + Guaranteed allocations + Deal voting rights",
  },
  {
    image: OpportunitiesImg4,
    price: "$110,000",
    name: OpportunitiesName4,
    text: "Access to all deals + Anytime allocation + Investment insurance",
  },
];
</script>

<template>
  <div
    class="mt-[120px] flex flex-col items-center justify-center gap-16 base-x-p max-md:gap-8 max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10"
  >
    <div class="flex flex-col items-center justify-center gap-9 max-md:gap-6">
      <div
        class="flex flex-col text-black text-center gap-6 items-center justify-center"
      >
        <div class="title">
          Access <span class="sectitle font-semibold">Tiers</span>
        </div>
        <div class="description max-w-[570px]">
          Forged from aerospace-grade steel. Optimized for global commerce.
          Choose your level of access.
        </div>
      </div>

      <div
        class="flex gap-7 items-center self-stretch justify-center xl:flex max-xl:grid max-xl:grid-cols-2 max-md:flex max-md:flex-col"
      >
        <div
          v-for="(card, index) in OpportunitiesCards"
          :key="index"
          :class="[
            'relative xl:w-[290px] w-full rounded-[20px] overflow-hidden justify-end flex-col flex items-end backdrop-blur-[10px]',
            'h-[405px] max-lg:h-[350px] max-md:h-[300px] max-sm:h-[260px]',
            {
              'bg-[linear-gradient(19deg,_rgba(255,255,255,0.72)_3.5%,rgba(255,91,0,0.72)_94.2%)] shadow-[0_4px_100px_-44px_#FF5B00]':
                index === 0,
            },
            {
              'bg-[linear-gradient(19deg,_rgba(255,255,255,0.72)_3.5%,rgba(168,168,168,0.72)_94.2%)] shadow-[0_4px_100px_-44px_#A3A3A3]':
                index === 1,
            },
            {
              'bg-[linear-gradient(19deg,_rgba(255,255,255,0.72)_3.5%,rgba(255,180,20,0.72)_94.2%)] shadow-[0_4px_100px_-44px_#FFB414]':
                index === 2,
            },
            {
              'bg-[linear-gradient(19deg,_rgba(255,255,255,0.72)_3.5%,rgba(38,38,38,0.72)_94.2%)] shadow-[0_4px_100px_-44px_#A3A3A3]':
                index === 3,
            },
          ]"
        >
          <div
            class="absolute top-0 right-1/2 translate-x-1/2 w-full h-auto max-w-[290px] max-md:max-w-[230px] max-sm:max-w-[180px]"
          >
            <img :src="card.image" />
          </div>

          <div
            class="flex px-2 flex-col rounded-[20px] overflow-hidden w-full pb-7 pt-8 justify-center items-center text-center backdrop-blur-[10px] gap-3 max-md:pb-5 max-md:pt-6 max-sm:pb-4"
          >
            <div class="flex flex-col items-center">
              <div
                class="text-black text-2xl max-md:text-xl max-sm:text-lg font-bold leading-[140%]"
              >
                {{ card.price }}
              </div>
              <div class="h-8 max-md:h-7 max-sm:h-6 w-auto">
                <img :src="card.name" />
              </div>
            </div>
            <div
              class="text-black max-w-[180px] text-sm max-md:text-xs leading-[130%]"
            >
              {{ card.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
