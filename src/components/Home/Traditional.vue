<script setup>
import { ref } from "vue";
import CheckMark from "@/assets/icons/CheckMark.vue";
import TraditionalLeftImg from "@/assets/img/Home/TraditionalLeftImg.png";
import TraditionalLeftImgMob from "@/assets/img/Home/TraditionalLeftImMob.png";
import CustomButton from "@/ui/CustomButton.vue";
import TraditionalRobot from "@/assets/img/Home/TraditionalRobot.png";
import ArrowsNextPrev from "@/ui/ArrowsNextPrev.vue";

const isMobile = window.innerWidth < 768;

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

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 2;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 2) % 2;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>

<template>
  <div
    class="flex base-x-p mt-[96px] flex-col justify-center items-center gap-[74px]"
  >
    <div class="title text-black text-center">
      Traditional VC vs <span class="sectitle">IPO Genie</span>
    </div>

    <!-- Desktop view -->
    <div class="hidden lg:flex items-center relative gap-5 w-full">
      <div class="w-[475px] flex-1 h-auto">
        <img :src="TraditionalLeftImg" />
      </div>
      <div
        class="flex w-full max-w-[475px] relative flex-1 flex-col px-10 pt-[72px] pb-8 rounded-[30px] bg-[linear-gradient(124deg,#FF5B00_16.64%,#DA132C_151.5%)] gap-10"
      >
        <div class="absolute w-[60px] aspect-square -top-[50px] right-[34px]">
          <img :src="TraditionalRobot" />
        </div>
        <div class="flex flex-col gap-7">
          <div>
            <div class="font-inter text-[42px] font-extrabold">IPO Genie</div>
            <div class="text-sm leading-[142%] font-semibold">
              Open. Fast. Intelligent.
            </div>
          </div>

          <div class="flex flex-col">
            <div
              v-for="(point, index) in TraditionalPoints"
              :key="index"
              :class="['gap-4 flex flex-col ', { 'pt-5': index != 0 }]"
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

    <!-- Mobile carousel view -->
    <div class="lg:hidden w-full relative">
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Slide 1: Traditional VC -->
          <div class="w-full flex-shrink-0 px-4">
            <div class="w-full max-w-[476px] mx-auto">
              <img
                :src="isMobile ? TraditionalLeftImgMob : TraditionalLeftImg"
              />
            </div>
          </div>

          <!-- Slide 2: IPO Genie -->
          <div class="w-full flex-shrink-0 px-4 mt-12">
            <div
              class="flex w-full max-w-[476px] mx-auto relative flex-col px-10 pt-[72px] pb-8 rounded-[30px] bg-[linear-gradient(124deg,#FF5B00_16.64%,#DA132C_151.5%)] gap-10"
            >
              <div
                class="absolute w-[60px] aspect-square -top-[50px] right-[34px]"
              >
                <img :src="TraditionalRobot" />
              </div>
              <div class="flex flex-col gap-7">
                <div>
                  <div
                    class="font-inter text-[42px] font-extrabold max-md:text-[32px]"
                  >
                    IPO Genie
                  </div>
                  <div class="text-sm leading-[142%] font-semibold">
                    Open. Fast. Intelligent.
                  </div>
                </div>

                <div class="flex flex-col">
                  <div
                    v-for="(point, index) in TraditionalPoints"
                    :key="index"
                    :class="['gap-4 flex flex-col ', { 'pt-5': index != 0 }]"
                  >
                    <div class="flex flex-col">
                      <div class="text-sm font-medium uppercase">
                        {{ point.title }}
                      </div>
                      <div
                        class="text-[26px] items-center flex gap-1 font-extrabold leading-[142%] max-md:text-2xl"
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
      </div>

      <div class="w-full mt-5 flex items-center justify-center">
        <ArrowsNextPrev :next="nextSlide" :prev="prevSlide" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
