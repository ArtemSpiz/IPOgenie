<template>
  <div
    :class="cardClass"
    class="bg-[#FF5B00] max-w-[660px] rounded-[30px] p-8 shadow-sm border border-black/5 flex flex-col md:flex-row items-center gap-8"
  >
    <div class="text-center flex flex-col gap-8 flex-1 order-2 md:order-1">
      <h3 class="text-[42px] font-extrabold font-inter mb-2 leading-none max-md:text-2xl">
        {{ title }}
      </h3>
      <p class="text-lg leading-[142%] max-md:text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardClass: {
    type: String,
    default: "",
  },
});
</script>
