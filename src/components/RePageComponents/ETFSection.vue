<template>
  <section
    class="base-x-p mx-auto max-w-[2000px] mt-[140px] max-lg:mt-[100px] max-md:mt-[85px]"
  >
    <div class="mx-auto text-center">
      <div class="title text-black !font-semibold">{{ title }}</div>
      <div
        class="flex flex-wrap items-center justify-center gap-2 md:gap-8 mt-6 max-md:mt-3"
      >
        <span
          class="bg-[#ff5b00] whitespace-nowrap text-white max-md:max-h-[42px] flex items-center font-semibold text-[70px] max-xl:text-5xl max-lg:text-3xl max-md:text-[22px] tracking-tight px-8 py-3 max-md:px-6 max-md:py-[10px] rounded-[30px] max-md:rounded-[10px]"
        >
          {{ orangeText }}
        </span>
        <span
          class="font-inter font-bold text-[70px] max-xl:text-5xl max-lg:text-3xl max-md:text-[22px] tracking-tight text-black"
          >—</span
        >
        <span
          class="bg-[#393939] whitespace-nowrap text-white font-inter max-md:max-h-[42px] flex items-center font-semibold italic text-[70px] max-xl:text-5xl max-lg:text-3xl max-md:text-[22px] tracking-tight max-md:px-6 px-8 py-3 max-md:py-[10px] rounded-[30px] max-md:rounded-[10px]"
        >
          {{ grayText }}
        </span>
      </div>
      <p
        class="description text-black mt-10 max-xl:mt-6 max-md:mt-3 mx-auto max-w-[1000px]"
      >
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Think of it as a",
  },
  orangeText: {
    type: String,
    default: "Partner",
  },
  grayText: {
    type: String,
    default: "but smarter",
  },
  text: {
    type: String,
    default:
      "Unlike traditional launchpads that mainly focus on token issuance, IPO Genie provides the entire backend infrastructure to run and manage an investment fund compliantly. It’s not just about launching; it’s about operating smoothly and transparently from day one.",
  },
});
</script>
