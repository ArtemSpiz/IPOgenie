<template>
  <div class="bg-gray-100 min-h-screen font-poppins">
    <!-- Main Content -->
    <main class="max-w-[2000px] base-x-p mx-auto pt-[200px] max-lg:pt-[140px]">
      <div class="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <!-- Left Column -->
        <div class="space-y-6">
          <HeroCard />
          <StatsRow />
        </div>

        <!-- Right Column - Buy Widget -->
        <BuyWidget />
      </div>

      <!-- My Investment Section -->
      <MyInvestment />
    </main>

    <!-- CTA Section -->
    <PreFooterCTA />
    <!-- Tokenomics Section -->
    <TokenomicsSection />

    <!-- How To Buy Section -->
    <HowToBuySection />
  </div>
</template>

<script setup>
import BuyWidget from "@/components/BuyNow/BuyWidget.vue";
import HeroCard from "@/components/BuyNow/HeroCard.vue";
import HowToBuySection from "@/components/BuyNow/HowToBuySection.vue";
import MyInvestment from "@/components/BuyNow/MyInvestment.vue";
import SecondStatsRow from "@/components/BuyNow/SecondStatsRow.vue";
import StatsRow from "@/components/BuyNow/StatsRow.vue";
import TokenomicsSection from "@/components/BuyNow/TokenomicsSection.vue";
import PreFooterCTA from "@/components/HowItWorks/PreFooterCTA.vue";
</script>
