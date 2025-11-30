<script setup>
import PulsePhoto1 from "@/assets/img/Home/PulsePhoto1.png";
import PulsePhoto2 from "@/assets/img/Home/PulsePhoto2.png";
import PulsePhoto3 from "@/assets/img/Home/PulsePhoto3.png";
import ArrowsNextPrev from "@/ui/ArrowsNextPrev.vue";
import Card from "@/ui/Card.vue";
import { ref } from "vue";

const PulseCards = [
  {
    photo: PulsePhoto1,
    title: "Ether Machine to raise over $1.6B in Nasdaq debut",
    text: "The crypto venture The Ether Machine...",
  },
  {
    photo: PulsePhoto2,
    title: "Crypto thefts in 2025 exceed $2.17B; CoinDCX hit $44M",
    text: "The crypto venture The Ether Machine...",
  },
  {
    photo: PulsePhoto3,
    title: "Trump signs executive order for Bitcoin Reserve",
    text: "The crypto venture The Ether Machine...",
  },
];

const current = ref(0);

const next = () => {
  current.value = (current.value + 1) % PulseCards.length;
};

const prev = () => {
  current.value = (current.value - 1 + PulseCards.length) % PulseCards.length;
};

let startX = 0;
let currentX = 0;

const onTouchStart = (e) => {
  startX = e.touches[0].clientX;
};

const onTouchMove = (e) => {
  currentX = e.touches[0].clientX;
};

const onTouchEnd = () => {
  const diff = startX - currentX;

  if (diff > 60) next();

  if (diff < -60) prev();

  startX = 0;
  currentX = 0;
};
</script>

<template>
  <div
    class="mt-[130px] flex flex-col gap-20 base-x-p items-center justify-center max-xl:mt-[100px] max-lg:gap-10 max-lg:mt-20 max-md:gap-9 max-md:mt-[50px]"
  >
    <div class="title text-black">
      Market <span class="sectitle">Pulse</span>
    </div>

    <div class="flex flex-col items-center gap-6 w-full">
      <div
        class="flex gap-9 max-xl:gap-5 justify-center w-full max-[900px]:hidden max-xl:flex-wrap"
      >
        <Card
          v-for="(card, i) in PulseCards"
          :key="i"
          :photo="card.photo"
          :title="card.title"
          :text="card.text"
        />
      </div>

      <div
        class="hidden w-full max-[900px]:flex justify-center overflow-hidden relative"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${current * 100}%)` }"
        >
          <div
            v-for="(card, i) in PulseCards"
            :key="i"
            class="min-w-full flex justify-center"
          >
            <Card :photo="card.photo" :title="card.title" :text="card.text" />
          </div>
        </div>
      </div>

      <ArrowsNextPrev
        :next="next"
        :prev="prev"
        class="!hidden max-[900px]:!flex"
      />
    </div>
  </div>
</template>

<style scoped></style>
