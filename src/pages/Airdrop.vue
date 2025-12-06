<template>
  <div class="min-h-screen px-4 py-12 md:py-16 lg:py-20">
    <div class="max-w-[2000px] base-x-p mx-auto">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Feature Tags -->
      <FeatureTags />

      <!-- Tab Navigation -->
      <TabNavigation :active-tab="activeTab" @switch-tab="switchTab" />

      <!-- Tab Content -->
      <div>
        <AirdropTab v-if="activeTab === 'airdrop'" />
        <UpcomingTab v-if="activeTab === 'upcoming'" />
        <ClosedTab v-if="activeTab === 'closed'" />

        <SocAirdrop v-if="activeTab === 'closed' || activeTab === 'upcoming'" />
      </div>
    </div>

    <FAQ :faq-list="FAQCards" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import { FAQCards } from "@/constants/Airdrop";
import HeroSection from "@/components/Airdrop/HeroSection.vue";
import FeatureTags from "@/components/Airdrop/FeatureTags.vue";
import TabNavigation from "@/components/Airdrop/TabNavigation.vue";
import AirdropTab from "@/components/Airdrop/AirdropTab.vue";
import UpcomingTab from "@/components/Airdrop/UpcomingTab.vue";
import ClosedTab from "@/components/Airdrop/ClosedTab.vue";
import FAQ from "@/components/Home/FAQ.vue";
import SocAirdrop from "@/components/Airdrop/SocAirdrop.vue";

const activeTab = ref("airdrop");

const switchTab = (tabName) => {
  activeTab.value = tabName;
};
</script>
