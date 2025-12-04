<script setup>
import CommunityCoin from "@/assets/img/Home/CommunityCoin.png";
import CustomButton from "@/ui/CustomButton.vue";
</script>

<template>
  <div class="flex flex-col self-stretch gap-14 base-x-p mt-7">
    <div
      class="flex justify-between gap-5 bg-[#16151A] px-6 py-[10px] rounded-[15px] items-center max-md:hidden max-lg:px-4"
    >
      <div class="flex gap-4 items-center">
        <div class="w-[120px] h-auto">
          <img :src="CommunityCoin" />
        </div>
        <div class="flex flex-col items-start">
          <div
            class="text-[32px] font-inter leading-[80%] font-extrabold max-xl:text-[30px] max-lg:text-[25px]"
          >
            Ready to <span class="italic">Break</span> the Gate?
          </div>
          <div class="text-[22px] leading-[140%]">
            The $IPO Token Presale is your entry ticket.
          </div>
        </div>
      </div>
      <CustomButton text="Buy $IPO Now" />
    </div>
  </div>
</template>

<style scoped></style>
