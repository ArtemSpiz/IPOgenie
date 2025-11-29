<script setup>
import CheckMark from "@/assets/icons/CheckMark.vue";
import TraditionalLeftImg from "@/assets/img/Home/TraditionalLeftImg.png";
import CustomButton from "@/ui/CustomButton.vue";
import TraditionalRobot from "@/assets/img/Home/TraditionalRobot.png";

const TraditionalPoints = [
  {
    title: "Minimum Investment",
    subtitle: "$10",
    line: true,
  },
  {
    title: "Lockup Period",
    subtitle: "Exit anytime",
    line: true,
  },
  {
    title: "Who Can Invest",
    subtitle: "Open to all",
    line: true,
  },
  {
    title: "Access Method",
    subtitle: "Hold tokens",
    line: true,
  },
  {
    title: "Due Diligence",
    subtitle: "AI scores everything",
  },
];
</script>

<template>
  <div
    class="flex base-x-p mt-[96px] flex-col justify-center items-center gap-[74px]"
  >
    <div class="title text-black text-center">
      Traditional VC vs <span class="sectitle">IPO Genie</span>
    </div>
    <div class="flex items-center gap-5">
      <div class="w-[474px] flex-1 h-auto">
        <img :src="TraditionalLeftImg" />
      </div>
      <div
        class="flex w-[475px] relative flex-1 flex-col px-10 pt-[72px] pb-8 rounded-[30px] bg-[linear-gradient(124deg,#FF5B00_16.64%,#DA132C_151.5%)] gap-10"
      >
        <div class="absolute w-[60px] aspect-square -top-[50px] right-[34px]">
          <img :src="TraditionalRobot" />
        </div>
        <div class="flex flex-col gap-7">
          <div>
            <div class="font-inter text-[42px] font-extrabold">
              Traditional VC
            </div>
            <div class="text-sm leading-[142%] font-semibold">
              Limited. Exclusive. Slow
            </div>
          </div>

          <div class="flex flex-col">
            <div
              v-for="(point, index) in TraditionalPoints"
              :key="index"
              :class="['gap-4 flex flex-col', { 'pt-5': index != 0 }]"
            >
              <div class="flex flex-col">
                <div class="text-sm font-medium uppercase">
                  {{ point.title }}
                </div>
                <div
                  class="text-[26px] items-center flex gap-1 font-extrabold leading-[142%]"
                >
                  {{ point.subtitle }} <CheckMark />
                </div>
              </div>

              <div
                v-if="point.line"
                class="w-full h-px bg-[rgba(255,255,255,0.22)]"
              ></div>
            </div>
          </div>
        </div>
        <CustomButton
          text="Get Started with $10"
          arrow-color="#fff"
          bg-color="#fff"
          text-color="#FF5B00"
          border-color="#fff"
          class="!w-max gap-10"
          bg-arrow="#FF5B00"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
