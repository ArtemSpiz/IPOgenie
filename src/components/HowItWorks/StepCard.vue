<template>
  <div
    class="bg-white rounded-[20px] p-8 max-md:p-[10px] relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 min-h-[224px] flex flex-col gap-4 justify-between max-md:min-h-[170px] max-md:rounded-[10px]"
  >
    <div
      class="absolute bottom-1/2 translate-y-1/2 right-0 max-md:bottom-auto max-md:top-0 max-md:translate-y-0"
    >
      <img
        :src="number"
        class="w-auto h-[136px] object-contain max-md:h-[96px]"
      />
    </div>
    <div
      :class="[
        'h-auto',
        { 'w-11 max-md:w-5 ': index === 0 },
        { 'w-[85px] max-md:w-[44px]': index === 1 },
        { 'w-[74px] max-md:w-[35px]': index === 2 },
        { 'w-[88px] max-md:w-[42px]': index === 3 },
      ]"
    >
      <img :src="icon" class="object-contain" />
    </div>
    <div class="flex flex-col gap-2 max-md:gap-0">
      <h3
        class="text-black font-inter text-2xl font-extrabold leading-[85%] max-md:text-base"
      >
        {{ title }}
      </h3>
      <p class="leading-[130%] text-sm text-black max-md:text-[9px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
