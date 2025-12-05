<template>
  <HeroSection
    :heading="[
      { text: 'IPO Index Funds', type: 'default' },
      { text: '(Wrapped Token Basket)', type: 'accent' },
    ]"
    description="Diversification is a cornerstone of smart investing — but in private markets, it’s long been out of reach. IPO Genie changes that with Index Funds, where a single token represents a curated basket of high-growth startups. Think of it as an ETF for the pre-IPO world — fully transparent, rebalanced automatically, and tradable anytime through IPO-native liquidity pools."
  />
  <ETFSection
    title="Think of it as a "
    orange-text="ETF"
    gray-text="but decentralized"
    text="Traditional ETFs give access to public stocks. IPO Genie brings that same simplicity to the private market. Each Index Fund token tracks a dynamic portfolio like “AI Frontier” or “Sustainable Growth”, letting investors gain diversified exposure to vetted startups with just one click."
  />
  <InstitutionaSection />
  <DiscoverSection />
  <TechnologySection />
</template>

<script setup>
import DiscoverSection from "@/components/RePageComponents/DiscoverSection.vue";
import ETFSection from "@/components/RePageComponents/ETFSection.vue";
import HeroSection from "@/components/RePageComponents/HeroSection.vue";
import InstitutionaSection from "@/components/RePageComponents/InstitutionaSection.vue";
import Matters from "@/components/RePageComponents/Matters.vue";
import TechnologySection from "@/components/RePageComponents/TechnologySection.vue";
</script>
