<script setup>
import FAQArrow from "@/assets/icons/FAQArrow.vue";
import { ref } from "vue";

const FAQCards = [
  {
    title: "What is IPO Genie?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "How do I join the $IPO presale?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "Is IPO Genie a top presale to watch in 2025?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "What is the $IPO token used for?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "How does AI Deal Scoring work?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "Is the $IPO token safe?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "Which networks does IPO Genie support?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
  {
    title: "Can I stake $IPO?",
    text: "Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.",
  },
];

const isOpen = ref(false);

const OpenFaq = (index) => {
  isOpen.value = isOpen.value === index ? null : index;
};
</script>

<template>
  <div
    class="flex flex-col text-black base-x-p gap-[104px] items-center justify-center mt-36 max-xl:gap-20 max-lg:mt-24 max-lg:gap-10 max-md:gap-6 max-md:mt-16"
  >
    <div class="flex flex-col gap-4 text-center items-center">
      <div class="title">
        <span class="sectitle">Frequently</span> Asked Questions
      </div>
      <div class="description max-w-[675px]">
        Here is our most frequently asked questions. If you can't find what you
        are looking for don't hesitate to contact us.
      </div>
    </div>

    <div class="flex flex-col gap-2 w-full max-w-[900px] mx-auto">
      <div
        v-for="(card, index) in FAQCards"
        :key="index"
        class="flex flex-col gap-2 cursor-pointer"
        @click="OpenFaq(index)"
      >
        <div class="flex justify-between items-center">
          <div class="text-xl leading-[200%] max-md:text-lg">
            {{ card.title }}
          </div>

          <div
            :class="[
              'transition-transform duration-200 ease-in-out',
              isOpen === index ? 'rotate-180' : '',
            ]"
          >
            <FAQArrow />
          </div>
        </div>

        <transition name="faq">
          <div
            v-show="isOpen === index"
            class="text-base leading-[140%] overflow-hidden"
          >
            {{ card.text }}
          </div>
        </transition>

        <div class="w-full h-[0.5px] bg-black"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

.faq-enter-to,
.faq-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}
</style>
