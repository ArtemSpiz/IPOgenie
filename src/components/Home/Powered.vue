<script setup>
import logo1 from "../../assets/img/Home/PoweredLogo1.png";
import logo2 from "../../assets/img/Home/PoweredLogo2.png";
import logo3 from "../../assets/img/Home/PoweredLogo3.png";
import logo4 from "../../assets/img/Home/PoweredLogo4.png";
import logo5 from "../../assets/img/Home/PoweredLogo5.png";
import Line from "../../assets/img/Home/PoweredLine.png";

const PoweredLogo = [
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo3 },
  { logo: logo4 },
  { logo: logo5 },
];
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-16 relative mt-16 overflow-hidden w-full max-lg:gap-10 max-md:gap-8 max-md:mt-10"
  >
    <div class="flex items-center gap-7 max-lg:gap-4 max-md:gap-3">
      <div class="w-full"><img :src="Line" class="h-[1px]" /></div>

      <div
        class="text-black text-center text-2xl font-medium text-nowrap flex-shrink-0 max-lg:text-lg max-md:text-xs"
      >
        Powered by
      </div>

      <div class="w-full">
        <img :src="Line" class="rotate-180 h-[1px]" />
      </div>
    </div>

    <div
      class="absolute left-0 z-10 bottom-0 h-full w-[20%]"
      style="
        background: linear-gradient(
          90deg,
          #efefef 50.1%,
          rgba(239, 239, 239, 0) 100%
        );
      "
    ></div>
    <div
      class="absolute right-0 z-10 rotate-180 bottom-0 h-full w-[20%]"
      style="
        background: linear-gradient(
          90deg,
          #efefef 50.1%,
          rgba(239, 239, 239, 0) 100%
        );
      "
    ></div>
    <div class="flex whitespace-nowrap animate-marquee">
      <div
        v-for="(logo, index) in PoweredLogo"
        :key="'a-' + index"
        class="mx-8 flex items-center justify-center max-md:mx-3"
      >
        <img
          :src="logo.logo"
          class="h-14 w-auto object-contain max-w-[210px] max-md:max-w-[86px] max-md:h-7"
        />
      </div>
      <div
        v-for="(logo, index) in PoweredLogo"
        :key="'b-' + index"
        class="mx-8 flex items-center justify-center max-md:mx-3"
      >
        <img
          :src="logo.logo"
          class="h-14 w-auto object-contain max-w-[210px] max-md:max-w-[86px] max-md:h-7"
        />
      </div>
      <div
        v-for="(logo, index) in PoweredLogo"
        :key="'c-' + index"
        class="mx-8 flex items-center justify-center max-md:mx-3"
      >
        <img
          :src="logo.logo"
          class="h-14 w-auto object-contain max-w-[210px] max-md:max-w-[86px] max-md:h-7"
        />
      </div>
      <div
        v-for="(logo, index) in PoweredLogo"
        :key="'d-' + index"
        class="mx-8 flex items-center justify-center max-md:mx-3"
      >
        <img
          :src="logo.logo"
          class="h-14 w-auto object-contain max-w-[210px] max-md:max-w-[86px] max-md:h-7"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
