<template>
  <div
    class="base-x-p mt-10 flex gap-10 items-center self-stretch max-w-[1300px] mx-auto flex-wrap max-md:gap-5"
  >
    <div
      v-for="(card, i) in SocialsCards"
      :key="i"
      :class="[
        'py-7 px-11 flex-1 rounded-[15px] flex items-center justify-between gap-3 max-md:py-5 max-md:px-6',
        { 'bg-[#26A4E2]': i === 0 },
        { 'bg-[#000]': i === 1 },
      ]"
    >
      <div class="flex flex-col gap-2">
        <div class="font-inter text-2xl font-bold max-md:text-xl">{{ card.title }}</div>
        <div class="text-xs">{{ card.subtitle }}</div>
      </div>
      <component :is="card.icon" />
    </div>
  </div>
</template>

<script setup>
import Telegram from "@/assets/icons/Telegram.vue";
import Xicon from "@/assets/icons/Xicon.vue";

const SocialsCards = [
  {
    title: "Join Telegram Chat",
    subtitle: "24/7 Live Support & Community",
    icon: Telegram,
  },
  {
    title: "Follow on X",
    subtitle: "Latest Announcements & Alpha",
    icon: Xicon,
  },
];
</script>
