<script setup>
import CustomButton from "./CustomButton.vue";

const props = defineProps({
  photo: String,
  title: String,
  text: String,
});
</script>

<template>
  <div
    class="flex flex-col max-w-[360px] pb-[14px] justify-between overflow-hidden gap-6 rounded-[20px] bg-white max-lg:gap-8 max-md:gap-10"
  >
    <div class="flex flex-col gap-6 items-center justify-center max-md:gap-5">
      <div class="w-full h-auto">
        <img :src="photo" />
      </div>
      <div class="flex px-4 flex-col gap-1">
        <div
          class="text-black text-lg font-semibold leading-[140%] max-lg:text-base max-md:text-sm"
        >
          {{ title }}
        </div>
        <div
          class="text-[#AFAFAF] text-xs leading-[160%] line-clamp-2 max-md:text-[10px]"
        >
          {{ text }}
        </div>
      </div>
    </div>

    <div class="px-4"><CustomButton text="Read" class="!w-full" /></div>
  </div>
</template>

<style scoped></style>
