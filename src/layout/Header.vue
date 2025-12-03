<script setup>
import Logo from "@/assets/img/Logo.png";
import LogoBlack from "@/assets/img/LogoBlack.png";
import Burger from "@/assets/icons/Burger.vue";

defineProps({
  colorBg: {
    type: Boolean,
    default: false,
  },
});

const HeaderLinks = [
  {
    title: "Platform",
    link: "/news",
  },
  {
    title: "Deals",
    link: "/wallet",
  },
  {
    title: "Token",
    link: "/tokenomics",
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
      <router-link to="/" class="h-10 max-xl:h-auto max-xl:w-[115px]">
        <img :src="colorBg ? LogoBlack : Logo" alt="" />
      </router-link>

      <div class="flex items-center gap-7 max-xl:gap-5 max-lg:hidden">
        <router-link
          :to="links.link"
          v-for="(links, index) in HeaderLinks"
          :key="index"
          :class="[
            'relative text-lg font-medium transition-colors duration-300 hover:text-[#FF5B00] after:absolute after:left-0 after:bottom-[0.5px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FF5B00] after:to-[#FFAA5B] after:transition-all after:duration-300 hover:after:w-full',
            colorBg ? 'text-black' : 'text-white',
          ]"
        >
          {{ links.title }}
        </router-link>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="py-[18px] px-[67px] rounded-2xl bg-[#FF5B00] text-base font-medium max-xl:px-[27px] max-lg:py-[9px] max-xl:text-xs max-md:text-[10px] max-lg:min-w-[100px] max-lg:rounded-[8px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,91,0,0.5)]"
        >
          Join Now
        </button>

        <div class="w-6 h-6 hidden max-lg:flex">
          <Burger :fill-color="colorBg ? '#000' : '#fff'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
