<script setup>
import CommunityCoin from "@/assets/img/Home/CommunityCoin.png";
import CustomButton from "@/ui/CustomButton.vue";
</script>

<template>
  <div
    class="flex flex-col self-stretch gap-14 base-x-p mt-[140px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10"
  >
    <div
      class="flex flex-col gap-10 items-center pt-16 px-[100px] max-lg:px-10 max-md:px-4 rounded-[60px] bg-[url('@/assets/img/Home/CommunityBg.png')] bg-cover bg-center bg-no-repeat min-h-[445px] max-xl:pt-12 max-lg:gap-6 max-lg:rounded-[20px] max-md:pt-9 max-md:gap-4 max-md:bg-[url('@/assets/img/Home/CommunityBgMob.png')]"
    >
      <div class="flex flex-col gap-1 items-center text-center">
        <div class="title">
          Join the <span class="sectitle">IPO Genie</span> Community
        </div>
        <div class="description max-w-[830px]">
          Be the first to receive updates, presale announcements, ecosystem
          news, and exclusive rewards as we build the world’s smartest Web3
          investment platform.
        </div>
      </div>
      <div
        class="flex self-stretch justify-center items-center gap-3 max-w-[830px] max-md:flex-col max-md:gap-[18px]"
      >
        <input
          placeholder="Enter your Email"
          class="bg-white border-none w-full max-w-[560px] rounded-[15px] px-7 py-[18px] text-base text-[#737373] placeholder:text-[#737373] placeholder:text-base max-md:py-3 max-md:px-5"
        />
        <CustomButton
          text="Submit"
          bg-color="#16151A"
          bg-arrow="#FF5B00"
          arrow-color="#000"
        />
      </div>
    </div>

    <div
      class="flex justify-between gap-5 bg-[#16151A] px-12 py-[10px] rounded-[40px] items-center max-md:hidden max-lg:px-8 max-lg:hidden"
    >
      <div class="flex gap-4 items-center">
        <div class="w-[120px] h-auto">
          <img :src="CommunityCoin" />
        </div>
        <div class="flex flex-col items-start">
          <div
            class="text-[32px] font-inter leading-[80%] font-extrabold max-xl:text-[30px] max-lg:text-[25px]"
          >
            Maximize your <span class="italic">returns</span> with our $IPO
          </div>
          <div class="text-[22px] leading-[140%]">Make it your own.</div>
        </div>
      </div>
      <CustomButton text="Buy $IPO Now" />
    </div>
  </div>
</template>

<style scoped></style>
