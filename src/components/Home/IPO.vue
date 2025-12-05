<script setup>
import Arrow from "@/assets/icons/Arrow.vue";
import Uber from "@/assets/icons/Uber.vue";
import IPOicon1 from "@/assets/img/Home/IPOicon1.png";
import IPOicon2 from "@/assets/img/Home/IPOicon2.png";
import IPOicon3 from "@/assets/img/Home/IPOicon3.png";
import IPOiconCenter1 from "@/assets/img/Home/IPOiconCenter1.png";
import IPOiconCenter2 from "@/assets/img/Home/IPOiconCenter2.png";
import IPOiconCenter3 from "@/assets/img/Home/IPOiconCenter3.png";
import CustomButton from "@/ui/CustomButton.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";

const IPOcards = [
  {
    icon: IPOicon1,
    title: "The $250K Ticket",
    subtitle:
      "Minimum buy-ins for VC funds exclude 99% of the world. You need a quarter million just to get a meeting",
  },
  {
    icon: IPOicon2,
    title: "The 10-Year Trap",
    subtitle:
      "Your money is frozen for a decade. Even if the company booms, you can't sell while insider cash out on secondary market.",
  },
  {
    icon: IPOicon3,
    title: "The Accredited Wall",
    subtitle:
      "Unless you earn $200k/year or have $1M+ net worth, you're not even allowed to look. The law literally prevents you from participating",
  },
  {
    text: "Every year , $3 trillion in startup value is created behind closed doors. The rich get richer. You get the scraps at IPO .",
    link: "Until now",
  },
];

const IPOlinesCenter = [
  {
    icon: IPOiconCenter1,
    name: "Uber",
    number1: "$5B",
    number2: "$70B",
    x: "(14x)",
  },
  {
    icon: IPOiconCenter2,
    name: "Airbnb",
    number1: "$18B",
    number2: "$100B",
    x: "(5.5x)",
  },
  {
    icon: IPOiconCenter3,
    name: "Coinbase",
    number1: "$8B",
    number2: "$86B",
    x: "(10x)",
  },
];

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

// Вираховуємо, які картки показувати: на мобілці всі, на десктопі – тільки slice(0,2)
const firstCards = computed(() => {
  return windowWidth.value <= 768 ? [] : IPOcards.slice(0, 2);
});
const lastCards = computed(() => {
  return windowWidth.value <= 768 ? IPOcards : IPOcards.slice(2, 4);
});
</script>

<template>
  <div
    class="mt-[94px] flex flex-col gap-11 items-center justify-center 2xl:px-[100px] max-w-[2000px] base-x-p mx-auto"
  >
    <div class="flex flex-col gap-10 w-full max-md:gap-4">
      <div class="flex flex-col gap-7 items-center">
        <div class="flex flex-col text-center gap-[17px] max-md:gap-3">
          <div
            class="flex flex-wrap justify-center title text-black items-center gap-4 max-md:gap-2"
          >
            <span class="whitespace-nowrap">You Missed</span>
            <span
              class="bg-black text-white px-4 md:px-4 lg:px-8 rounded-2xl max-md:rounded-xl flex items-center h-[50px] md:h-[90px] lg:h-[104px]"
            >
              <Uber class="h-[15px] w-auto md:h-[60px] lg:h-[70px]" />
            </span>
            <span class="whitespace-nowrap">at $5 Billion</span>
          </div>

          <div class="title 2xl:!text-[100px] text-[#FF5B00]">
            By the $IPO, It was $70 Billion
          </div>
        </div>

        <div
          class="description text-center text-black max-w-[570px] max-lg:max-w-[400px]"
        >
          Forged from aerospace-grade steel. Optimized for global commerce.
          Choose your level of access.
        </div>
      </div>

      <div class="flex gap-[7px] max-2xl:flex-col w-full">
        <div
          class="flex flex-col max-2xl:flex-row gap-[7px] w-full 2xl:w-auto max-md:flex-col"
        >
          <div
            v-for="(card, index) in firstCards"
            :key="index"
            class="border-[0.5px] flex-1 justify-between flex flex-col border-[#FF5B00] bg-white rounded-[30px] min-h-[235px] px-[18px] py-[22px] 2xl:w-[325px] max-md:p-5 max-md:pb-3 max-md:rounded-[15px] max-md:min-h-[90px] max-md:h-full max-md:flex-row max-md:gap-4"
          >
            <div v-if="card.icon" class="w-8 h-8">
              <img :src="card.icon" alt="icon" />
            </div>
            <div class="flex flex-col gap-4">
              <div
                v-if="card.title"
                class="text-black font-inter text-2xl font-extrabold leading-[85%] max-md:text-lg"
              >
                {{ card.title }}
              </div>
              <div
                v-if="card.subtitle"
                class="text-black font-inter text-sm leading-[142%]"
              >
                {{ card.subtitle }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-[15px] min-w-[500px] items-center gap-8 justify-between px-[30px] py-10 bg-white flex flex-col rounded-[30px] shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] border-[#EDEDED] w-full lg:flex-1 max-md:px-[14px] max-md:py-7 max-md:gap-5 max-md:border-[7px] max-md:rounded-[20px]"
        >
          <div
            class="text-[32px] text-center lg:text-left text-black font-inter font-extrabold leading-[85%] max-md:text-[22px]"
          >
            What insider Got vs What You Got
          </div>

          <div class="flex flex-col self-stretch w-full gap-[6px]">
            <div
              v-for="(link, index) in IPOlinesCenter"
              :key="index"
              class="w-full flex bg-[#ECECEC] rounded-[20px] items-center justify-between p-5 flex-wrap gap-4 max-md:items-start max-md:gap-3 max-md:p-[9px] max-md:rounded-[8px]"
            >
              <div class="flex gap-[11px] items-center flex-wrap max-md:gap-3">
                <div
                  class="w-[30px] h-[30px] flex-shrink-0 max-md:w-4 max-md:h-4"
                >
                  <img :src="link.icon" alt="company icon" />
                </div>

                <div class="flex gap-5 items-center flex-wrap max-md:gap-3">
                  <div
                    class="text-xl font-inter text-black font-extrabold whitespace-nowrap max-md:text-xs"
                  >
                    {{ link.name }}
                  </div>

                  <div
                    class="text-xl flex items-center gap-[10px] font-inter text-black font-medium whitespace-nowrap max-md:text-xs"
                  >
                    Pre-IPO <Arrow fill-color="#000" /> IPO
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 flex-wrap max-md:gap-[6px]">
                <div
                  class="text-xl flex items-center gap-[10px] font-inter text-[#00CA5B] font-medium whitespace-nowrap max-md:text-xs"
                >
                  {{ link.number1 }} <Arrow fill-color="#00CA5B" />
                  {{ link.number2 }}
                </div>

                <div
                  class="text-base font-inter text-[#898989] font-medium whitespace-nowrap max-md:text-xs"
                >
                  {{ link.x }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center flex-col gap-2 w-full">
            <div class="w-full h-[1px] bg-black max-md:opacity-50"></div>

            <div
              class="text-base font-inter text-[#898989] leading-[142%] max-md:text-sm"
            >
              By the time you could buy on IPO day, the biggest gains were
              already captured by VCs and insiders
            </div>
          </div>
        </div>

        <div
          class="flex flex-col max-2xl:flex-row gap-[7px] w-full 2xl:w-auto max-md:flex-col"
        >
          <div
            v-for="(card, index) in lastCards"
            :key="index + 2"
            class="border-[0.5px] flex-1 justify-between max-md:justify-start flex flex-col border-[#FF5B00] bg-white rounded-[30px] min-h-[235px] px-[18px] py-[22px] 2xl:w-[325px] max-md:p-5 max-md:pb-3 max-md:rounded-[15px] max-md:min-h-[90px] max-md:h-full max-md:flex-row max-md:gap-4"
          >
            <div
              v-if="card.icon"
              class="w-8 h-full aspect-square max-md:w-5 max-md:min-w-[20px]"
            >
              <img :src="card.icon" alt="icon" class="object-contain" />
            </div>
            <div class="flex flex-col gap-4 max-md:gap-[2px]">
              <div
                v-if="card.title"
                class="text-black font-inter text-2xl font-extrabold leading-[85%] max-md:text-base"
              >
                {{ card.title }}
              </div>
              <div
                v-if="card.subtitle"
                class="text-black font-inter text-sm leading-[142%] max-md:text-[10px]"
              >
                {{ card.subtitle }}
              </div>

              <div
                v-if="card.text"
                class="text-black italic text-[20px] leading-[142%] max-md:text-xs"
              >
                {{ card.text }}
              </div>
              <div
                v-if="card.link"
                class="text-[#FF5B00] flex italic font-bold text-[22px] leading-[142%] max-md:text-xs max-md:w-full max-md:justify-end"
              >
                {{ card.link }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CustomButton text="Buy Before its too late" class="!w-max gap-3" />
  </div>
</template>

<style scoped></style>
