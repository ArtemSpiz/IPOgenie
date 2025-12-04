<template>
  <div
    class="bg-white rounded-[20px] p-8 max-md:p-5 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 min-h-[224px] flex flex-col gap-4 justify-between"
  >
    <div class="absolute bottom-1/2 translate-y-1/2 right-0">
      <img :src="number" class="w-auto h-[136px] object-contain" />
    </div>
    <div
      :class="[
        'h-auto',
        { 'w-11': index === 0 },
        { 'w-[85px]': index === 1 },
        { 'w-[74px]': index === 2 },
        { 'w-[88px]': index === 3 },
      ]"
    >
      <img :src="icon" class="object-contain" />
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-black font-inter text-2xl font-extrabold leading-[85%]">
        {{ title }}
      </h3>
      <p class="description text-black">{{ description }}</p>
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
