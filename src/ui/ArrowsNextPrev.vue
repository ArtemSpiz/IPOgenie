<template>
  <div class="flex items-center gap-5">
    <div
      @click="prev"
      class="bg-[#16151A] cursor-pointer rounded-[5px] w-10 h-10 flex justify-center items-center shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)]"
    >
      <ArrowNext fill-color="#fff" class="rotate-180" />
    </div>
    <div
      @click="next"
      class="bg-[#FFF] cursor-pointer rounded-[5px] w-10 h-10 flex justify-center items-center shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)]"
    >
      <ArrowNext />
    </div>
  </div>
</template>

<script setup>
import ArrowNext from "@/assets/icons/ArrowNext.vue";

defineProps({
  next: {
    type: Function,
    required: true,
  },
  prev: {
    type: Function,
    required: true,
  },
});
</script>
