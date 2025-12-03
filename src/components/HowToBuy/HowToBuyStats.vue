<template>
  <section
    class="base-x-p mt-10 max-w-[2000px] mx-auto mb-[200px] max-xl:mb-[150px] max-md:mb-[80px]"
  >
    <div
      class="flex items-center self-stretch justify-center max-md:flex-col max-md:gap-7"
    >
      <div
        v-for="(card, index) in TokenStatsCards"
        :key="index"
        class="flex items-center"
      >
        <div class="flex flex-col text-center items-center">
          <div
            :class="card.titleClass"
            class="text-black text-[32px] font-inter font-extrabold leading-[80%] max-lg:text-[25px]"
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
    title: "Contract Audited",
    subtitle: "100% verified smart contracts",
    line: true,
  },
  {
    title: "AES-256 Encryption",
    subtitle: "Bank-grade data security",
    line: true,
  },
  {
    title: "24/7 Live Support",
    subtitle: "Always here when you need us",
  },
];
</script>
