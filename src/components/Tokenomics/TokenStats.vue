<template>
  <section class="base-x-p mt-10 max-w-[2000px] mx-auto">
    <div
      class="flex items-center self-stretch justify-center max-md:flex-col max-md:gap-7"
    >
      <div
        v-for="(card, index) in TokenStatsCards"
        :key="index"
        class="flex items-center"
      >
        <div
          class="flex flex-col text-center items-center gap-6 max-lg:gap-4 max-md:gap-1"
        >
          <div
            :class="card.titleClass"
            class="text-black text-[100px] font-inter font-extrabold leading-[80%] max-2xl:text-[70px] max-lg:text-[40px]"
          >
            {{ card.title }}
          </div>
          <div
            class="text-black text-lg font-inter font-semibold leading-[140%] max-lg:text-base max-md:text-xs"
          >
            {{ card.subtitle }}
          </div>
        </div>

        <div
          v-if="card.line"
          class="h-[160px] w-px bg-[#737373] mx-[76px] max-xl:mx-[20px] max-lg:mx-[10px] max-md:hidden"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const TokenStatsCards = [
  {
    title: "436,900,000,000",
    subtitle: "Total $IPO Supply",
    titleClass: "text-4xl md:text-5xl font-bold tracking-tight text-black",
    line: true,
  },
  {
    title: "ERC-20",
    subtitle: "Bridges to Solana, Base, and L2s",
    titleClass:
      "text-4xl md:text-5xl font-bold whitespace-nowrap tracking-tight text-black",
    line: true,
  },
  {
    title: "Utility & Governance",
    subtitle: "Token Type",
    titleClass:
      "text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight",
  },
];
</script>
