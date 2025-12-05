<template>
  <div class="max-w-[2000px] base-x-p mx-auto px-4 mt-4 sm:mt-6">
    <div
      class="bg-white overflow-hidden rounded-3xl gap-10 max-md:gap-7 flex flex-col"
    >
      <!-- Tabs -->
      <div class="flex sm:gap-12 border-black/20 border-b items-center">
        <div
          v-for="(tab, i) in Tabs"
          :key="i"
          :class="[
            'text-2xl max-lg:text-lg max-md:text-xs px-7 max-md:px-[18px] py-10 max-md:py-4 cursor-pointer font-semibold',
            activeTab === tab.value
              ? 'text-[#FF5B00] bg-[#F4CCB5] border  border-b-[#FF5B00]'
              : 'text-[#8C8C8C]',
          ]"
          @click="activeTab = tab.value"
        >
          {{ tab.title }}
        </div>
      </div>

      <div
        class="px-[75px] pb-[70px] max-lg:px-10 max-lg:py-8 max-md:px-6 max-md:py-4"
      >
        <div v-if="activeTab === 'tokenomics'">
          <TabTokenomics />
        </div>

        <div
          v-if="activeTab === 'referral'"
          class="justify-center items-center flex"
        >
          <TabReferral :table-data="Table" :table-names="NamesRef" />
        </div>

        <div
          v-if="activeTab === 'investors'"
          class="justify-center items-center flex"
        >
          <TabReferral
            title="Top Investors"
            subtitle="Earn rewards by inviting friends to the presale."
            :table-data="Table2"
            :table-names="NamesInvest"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TabTokenomics from "./TabTokenomics.vue";
import TabReferral from "./TabReferral.vue";
import { NamesInvest, NamesRef, Table, Table2 } from "@/constants/BuyNow";

const activeTab = ref("tokenomics");

const Tabs = [
  {
    title: "Tokenomics",
    value: "tokenomics",
  },
  {
    title: "Referral Leader Board",
    value: "referral",
  },
  {
    title: "Top Investors",
    value: "investors",
  },
];
</script>
