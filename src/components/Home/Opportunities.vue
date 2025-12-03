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

import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const cardsWrapper = ref(null);
const sectionRef = ref(null);
const pinContainer = ref(null);

onMounted(async () => {
  if (window.innerWidth >= 768) return;
  await nextTick();

  const wrapper = cardsWrapper.value;
  const cards = wrapper.querySelectorAll(".card-item");
  if (!cards.length) return;

  const spacing = 40;

  cards.forEach((c, i) => {
    c.style.zIndex = 100 - (cards.length - i);
    gsap.set(c, { position: "relative" });
  });

  const heights = [...cards].map((c) => c.getBoundingClientRect().height);

  const finalHeight = heights[0] + spacing * (cards.length - 1) + 125;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top top",
      end: `+=${finalHeight * 1.5}`,
      scrub: 1,
      pin: true,
      pinSpacing: false,
    },
  });

  tl.to(
    wrapper,
    {
      height: finalHeight,
      ease: "none",
    },
    0
  );

  let accumulatedOffset = 0;

  cards.forEach((card, i) => {
    if (i === 0) {
      gsap.set(card, { y: 0 });
      return;
    }

    accumulatedOffset += heights[i - 1] - spacing;

    tl.to(
      card,
      {
        y: -accumulatedOffset,
        ease: "none",
      },
      i * 0.15
    );
  });
});
</script>

<template>
  <div
    ref="sectionRef"
    class="mt-[120px] flex flex-col items-center justify-center gap-16 base-x-p max-md:gap-8 max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10 max-md:justify-start"
  >
    <div
      ref="pinContainer"
      class="flex flex-col items-center justify-center gap-9 max-md:gap-6 w-full"
    >
      <div
        class="flex flex-col text-black text-center gap-6 items-center justify-center"
      >
        <div class="title">
          Unlock More <span class="sectitle font-semibold">Opportunities</span>
        </div>
        <div class="description max-w-[570px]">
          Forged from aerospace-grade steel. Optimized for global commerce.
          Choose your level of access.
        </div>
      </div>

      <div
        ref="cardsWrapper"
        class="flex gap-7 items-center self-stretch justify-center xl:flex max-xl:grid max-xl:grid-cols-2 max-md:flex max-md:flex-col max-md:justify-start max-md:overflow-hidden"
      >
        <div
          v-for="(card, index) in OpportunitiesCards"
          :key="index"
          class="card-item"
          :class="[
            'relative xl:w-[290px] max-md:max-w-[290px] w-full rounded-[20px] overflow-hidden justify-end flex-col flex items-end backdrop-blur-[10px]',
            'min-h-[405px] ',
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
            class="absolute top-0 right-1/2 translate-x-1/2 w-full h-auto max-w-[290px]"
          >
            <img :src="card.image" />
          </div>

          <div
            class="flex px-2 flex-col rounded-[20px] overflow-hidden w-full pb-7 pt-8 justify-center items-center text-center backdrop-blur-[10px] gap-3"
          >
            <div class="flex flex-col items-center">
              <div class="text-black text-2xl font-bold leading-[140%]">
                {{ card.price }}
              </div>
              <div class="h-8 max-w-[170px] w-auto">
                <img :src="card.name" class="object-contain"/>
              </div>
            </div>
            <div class="text-black max-w-[180px] text-sm leading-[130%]">
              {{ card.text }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 items-center">
      <CustomButton bg-color="#16151A" arrow-color="#000" text="Buy Now" />
      <CustomButton
        bg-color="transparent"
        arrow-color="#FFF"
        text-color="#000"
        border-color="#000"
        text="Visit VIP Room"
        bg-arrow="#FF5B00"
      />
    </div>
  </div>
</template>

<style scoped></style>
