<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import logoPartner1 from "@/assets/img/Home/logoPartner1.png";
import logoPartner2 from "@/assets/img/Home/logoPartner2.png";
import VideoBgHero from "@/assets/img/Home/VideoBgHero.mp4";
</script>

<template>
  <div class="px-[7px] pt-[3px] h-screen max-md:px-[10px] max-md:pt-[5px]">
    <div
      class="flex relative flex-col gap-10 items-center justify-end rounded-[60px] max-md:rounded-[30px] overflow-hidden w-full h-full pb-[200px] max-2xl:pb-[100px] max-xl:pb-[80px] max-lg:pb-[60px] max-md:pb-[40px] max-md:gap-0 max-md:px-12 max-xl::rounded-[30px]"
    >
      <img
        loading="eager"
        :src="HeroBg"
        class="absolute inset-0 w-full h-full object-cover max-md:hidden"
        alt="Background fallback"
      />
      <img
        loading="eager"
        :src="HeroBgMob"
        class="absolute inset-0 w-full h-full object-cover hidden max-md:block"
        alt="Background fallback mobile"
      />
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="VideoBgHero" type="video/mp4" />
      </video>
      <div
        class="flex flex-col z-20 items-center max-md:justify-center max-md:h-[calc(100%-150px)]"
      >
        <div
          class="text-[150px] text-center font-bold tracking-[-6px] max-2xl:text-[120px] max-xl:text-[100px] max-lg:text-7xl max-lg:tracking-[-1.2px] max-md:text-[42px]"
        >
          Web3 WallStreet
        </div>
        <div
          class="description max-w-[800px] max-lg:max-w-[500px] text-center mt-5 max-md:!leading-[160%] max-md:tracking-[-0.24px]"
        >
          IPO Genie gives you early-stage access to the private deals that shape
          global markets - previouslyreserved for institutions like Sequoia,
          Berkshire Hathaway, and BlackRock.
        </div>
        <div class="flex items-center gap-[14px] mt-8">
          <CustomButton />
          <CustomButton
            text="How to Buy"
            bg-color="transparent"
            arrow-color="#000"
            border-color="#fff"
          />
        </div>
      </div>

      <div
        class="flex z-20 gap-4 items-center max-md:flex-col max-md:gap-[10px]"
      >
        <div class="text-sm max-md:text-xs">Audited by :</div>
        <div class="flex gap-4 items-center max-md:gap-5">
          <div class="w-[110px] h-7 max-md:w-[95px] max-md:h-auto">
            <img :src="logoPartner1" />
          </div>
          <svg
            class="max-md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="31"
            viewBox="0 0 1 31"
            fill="none"
          >
            <path d="M0.5 0L0.500001 31" stroke="white" />
          </svg>
          <div class="w-[103px] h-6 max-md:w-[95px] max-md:h-auto">
            <img :src="logoPartner2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
