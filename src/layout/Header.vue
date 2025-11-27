<script setup>
import Logo from "@/assets/img/Logo.png";
import Burger from "@/assets/img/Home/burger.png";

defineProps({
  colorBg: {
    type: Boolean,
    default: false,
  },
});

const HeaderLinks = [
  {
    title: "Platform",
  },
  {
    title: "Deals",
  },
  {
    title: "Token",
  },
  {
    title: "How It Works",
  },
  {
    title: "Track Record",
  },
  {
    title: "FAQ",
  },
  {
    title: "Contact",
  },
];
</script>

<template>
  <div
    :class="[
      'absolute left-0 right-0 top-[28px] z-50 flex justify-center px-4',
    ]"
  >
    <div
      :class="[
        'flex justify-between items-center rounded-[30px] py-5 px-10 w-full max-w-7xl max-md:px-5 max-md:py-3',
        colorBg ? 'bg-black/5 backdrop-blur-sm' : 'bg-transparent',
      ]"
    >
      <div class="h-10 max-xl:h-auto max-xl:w-[115px]">
        <img :src="Logo" alt="" />
      </div>

      <div class="flex items-center gap-10 max-xl:gap-5 max-lg:hidden">
        <div v-for="(links, index) in HeaderLinks" :key="index" class="text-lg">
          {{ links.title }}
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="py-[18px] px-[67px] rounded-2xl bg-[#FF5B00] text-base font-medium max-xl:px-[27px] max-lg:py-[9px] max-xl:text-xs max-md:text-[10px] max-lg:min-w-[100px] max-lg:rounded-[8px]"
        >
          Join Now
        </button>

        <div class="w-6 h-6 hidden max-lg:flex">
          <img :src="Burger" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
