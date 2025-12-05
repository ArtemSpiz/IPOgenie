<template>
  <section
    class="base-x-p max-w-[2000px] text-black text-center mx-auto mt-[130px] max-xl:mt-[100px] max-lg:mt-20 max-md:mt-12"
  >
    <h2 class="title text-black mb-8">
      Technology <span class="sectitle">Overview</span>
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-4 max-md:gap-2">
      <div
        v-for="tech in technologies"
        :key="tech.title"
        class="bg-white rounded-2xl max-md:rounded-[7px] p-4 flex text-start items-center gap-3 max-md:py-2 max-md:pl-1 max-md:gap-0 max-md:min-w-[160px]"
      >
        <div class="w-[42px] aspect-square max-md:w-7">
          <img :src="tech.icon" class="object-contain" />
        </div>
        <div>
          <p
            class="font-medium text-sm leading-tight max-md:text-[10px]"
            v-html="tech.title"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon1 from "@/assets/img/RePages/OverviewIcon1.png";
import Icon2 from "@/assets/img/RePages/OverviewIcon2.png";
import Icon3 from "@/assets/img/RePages/OverviewIcon3.png";
import Icon4 from "@/assets/img/RePages/OverviewIcon4.png";
import Icon5 from "@/assets/img/RePages/OverviewIcon5.png";

const technologies = [
  {
    icon: Icon1,
    title: "White-Labeled<br>Fund-as-a Service (FaaS)",
  },
  {
    icon: Icon2,
    title: "Behaviour Based<br>Staking & Rewards",
  },
  {
    icon: Icon3,
    title: "IPO Index Funds<br>Wrapped Token Baskets",
  },
  {
    icon: Icon4,
    title: "Deal Builder<br>Marketplace",
  },
  {
    icon: Icon5,
    title: "Deal Builder<br>Marketplace",
  },
];
</script>
