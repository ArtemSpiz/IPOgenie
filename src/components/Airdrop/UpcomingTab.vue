<script setup>
import Shield from "@/assets/icons/Shield.vue";
import CustomButton from "@/ui/CustomButton.vue";
import UpcomingImg from "@/assets/img/Airdrop/UpcomingImg.png";

const cards = [
  {
    tag: "Coming Soon",
    title: "Early Bird Bonus",
    description:
      "As the IPO Genie network expands, we are prioritizing our early ecosystem participants. This upcoming campaign is designed to maximize your ownership stake, offering a strategic entry point for those who secure their position before the next growth phase.",
    features: ["Deal Scouting Feature Unlock"],
    image: UpcomingImg,
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white rounded-3xl overflow-hidden shadow-sm"
    >
      <div class="h-4 bg-[#d9d9d9] mt-1"></div>

      <div class="px-14 pb-10 pt-14 flex items-center justify-between gap-5">
        <div class="flex flex-col gap-10 items-start">
          <div class="flex flex-col gap-6">
            <div
              class="px-4 py-3 w-max border border-[#FF5C01] bg-[rgba(255,92,1,0.28)] rounded-[10px] text-base text-[#FF5B00]"
            >
              {{ card.tag }}
            </div>

            <h2
              class="text-3xl font-inter md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight"
            >
              {{ card.title }}
            </h2>
          </div>

          <div class="description text-black">
            {{ card.description }}
          </div>

          <div class="flex flex-col gap-6">
            <div
              v-for="(feature, i) in card.features"
              :key="i"
              class="flex text-black text-lg font-semibold leading-[140%] items-center gap-2"
            >
              <Shield /> {{ feature }}
            </div>

            <CustomButton
              text="Alert Me When Live"
              bg-arrow="#FF5B00"
              bg-color="#16151A"
              arrow-color="#000"
              class="!w-max gap-5"
            />
          </div>
        </div>

        <div class="h-full w-auto min-h-[400px] aspect-square">
          <img :src="card.image" class="object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>
