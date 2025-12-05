<script setup>
import Copy from "@/assets/icons/Copy.vue";
import CommunityCoin from "@/assets/img/Home/CommunityCoin.png";
import CustomButton from "@/ui/CustomButton.vue";
</script>

<template>
  <div
    class="flex max-w-[2000px] mx-auto flex-col self-stretch gap-14 base-x-p mt-7"
  >
    <div
      class="flex justify-between gap-5 bg-[#16151A] px-6 py-[10px] rounded-[15px] items-center max-lg:px-4"
    >
      <div class="flex gap-4 items-center max-md:gap-0">
        <div class="w-[120px] h-auto max-md:w-[70px]">
          <img :src="CommunityCoin" />
        </div>
        <div class="flex flex-col items-start">
          <div
            class="text-[32px] font-inter leading-[80%] font-extrabold max-xl:text-[30px] max-lg:text-base"
          >
            Share & <span class="italic">Earn</span> 5%
          </div>
          <div class="text-[22px] leading-[140%] max-lg:text-[10px]">
            Get 5% of tokens from every purchase made via your link.
          </div>
        </div>
      </div>
      <CustomButton text="Copy Link" :icon="Copy" />
    </div>
  </div>
</template>

<style scoped></style>
