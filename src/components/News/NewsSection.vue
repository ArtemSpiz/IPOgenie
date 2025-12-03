<script setup>
import PulsePhoto1 from "@/assets/img/Home/PulsePhoto1.png";
import PulsePhoto2 from "@/assets/img/Home/PulsePhoto2.png";
import PulsePhoto3 from "@/assets/img/Home/PulsePhoto3.png";
import Card from "@/ui/Card.vue";
import CustomButton from "@/ui/CustomButton.vue";
import { computed, ref } from "vue";

const FilterNews = [
  {
    title: "All Content",
  },
  {
    title: "Educational Content",
  },
  {
    title: "News & Updates",
  },
  {
    title: "Informational Guides",
  },
];

const NewsCards = [
  {
    photo: PulsePhoto1,
    title: "Ether Machine to raise over $1.6B in Nasdaq debut",
    text: "The crypto venture The Ether Machine...",
    type: "Educational Content",
  },
  {
    photo: PulsePhoto2,
    title: "Crypto thefts in 2025 exceed $2.17B; CoinDCX hit $44M",
    text: "The crypto venture The Ether Machine...",
    type: "Educational Content",
  },
  {
    photo: PulsePhoto3,
    title: "Trump signs executive order for Bitcoin Reserve",
    text: "The crypto venture The Ether Machine...",
    type: "News & Updates",
  },
  {
    photo: PulsePhoto1,
    title: "Ether Machine to raise over $1.6B in Nasdaq debut",
    text: "The crypto venture The Ether Machine...",
    type: "Informational Guides",
  },
  {
    photo: PulsePhoto2,
    title: "Crypto thefts in 2025 exceed $2.17B; CoinDCX hit $44M",
    text: "The crypto venture The Ether Machine...",
    type: "News & Updates",
  },
  {
    photo: PulsePhoto3,
    title: "Trump signs executive order for Bitcoin Reserve",
    text: "The crypto venture The Ether Machine...",
    type: "Informational Guides",
  },
];

const activeFilter = ref(0);

const filteredNews = computed(() => {
  const filterTitle = FilterNews[activeFilter.value].title;
  if (filterTitle === "All Content") return NewsCards;
  return NewsCards.filter((card) => card.type === filterTitle);
});
</script>

<template>
  <div class="base-x-p mt-14 items-center gap-24 justify-center flex flex-col">
    <div class="items-center gap-14 justify-center flex flex-col max-md:gap-10">
      <div class="flex items-center w-full justify-start gap-2 flex-wrap">
        <div
          v-for="(filter, i) in FilterNews"
          :key="i"
          :class="[
            'px-3 py-4 cursor-pointer rounded-[20px] whitespace-nowrap bg-[#0F0E0E] max-md:text-sm max-md:px-2 max-md:py-3',
            { 'bg-[#FF5C01]': activeFilter === i },
          ]"
          @click="activeFilter = i"
        >
          {{ filter.title }}
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-x-14 gap-y-7 max-lg:grid-cols-2 max-md:flex max-md:flex-col"
      >
        <Card
          v-for="(card, i) in filteredNews"
          :key="i"
          :photo="card.photo"
          :title="card.title"
          :text="card.text"
        />
      </div>
    </div>

    <CustomButton text="Read More" bg-color="#16151A" arrow-color="#000" />
  </div>
</template>

<style scoped></style>
