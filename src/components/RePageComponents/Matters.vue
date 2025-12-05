<script setup>

const props = defineProps({
  mattersCards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="base-x-p max-w-[2000px] flex justify-between gap-6 text-black mx-auto mt-[150px] max-xl:mt-[100px] max-lg:flex-col max-lg:mt-24 max-md:mt-20"
  >
    <div class="flex-1">
      <div class="title whitespace-nowrap">
        Why It <span class="sectitle">Matters</span>
      </div>
      <div class="description mt-5 max-md:mt-2">
        Understanding the core benefits of our platform structure.
      </div>
    </div>
    <div class="flex flex-col items-center gap-10 flex-1 max-md:gap-4">
      <div
        v-for="(card, i) in mattersCards"
        :key="i"
        class="flex self-stretch gap-7 max-md:gap-2"
      >
        <div class="w-[6px] h-auto bg-[#FF5B00] rounded-[3px]"></div>
        <div class="flex flex-col items-start text-start gap-6 max-md:gap-2">
          <div
            class="text-2xl font-inter font-extrabold leading-[85%] max-md:text-lg"
          >
            {{ card.title }}
          </div>
          <div class="text-lg leading-[140%] max-md:text-xs">
            {{ card.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
