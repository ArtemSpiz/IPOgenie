<template>
  <div class="flex justify-center items-center mb-4 relative">
    <!-- Progress Line -->
    <div
      class="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-300 -translate-y-1/2"
      style="z-index: 0"
    >
      <div class="h-full bg-orange-500" style="width: 33%"></div>
    </div>

    <div
      class="flex w-full max-w-4xl relative justify-between overflow-x-auto pb-4 sm:pb-0 gap-4 sm:gap-0"
      style="z-index: 1"
    >
      <StakingTier
        v-for="tier in tiers"
        :key="tier.name"
        :tier="tier"
      />
    </div>
  </div>
</template>

<script setup>
import StakingTier from './StakingTier.vue'

const tiers = [
  {
    name: 'Starter',
    apy: '3% APY',
    minAmount: '$150+',
    bgColor: 'bg-white',
    borderColor: 'border-orange-500',
    iconBg: 'bg-orange-500',
    icon: 'star',
    active: true
  },
  {
    name: 'Bronze',
    apy: '5% APY',
    minAmount: '$400+',
    bgColor: 'bg-orange-500',
    borderColor: 'border-orange-500',
    iconBg: 'bg-orange-500',
    icon: 'award',
    active: true
  },
  {
    name: 'Silver',
    apy: '8% APY',
    minAmount: '$1000+',
    bgColor: 'bg-gray-500',
    borderColor: 'border-gray-400',
    iconBg: 'bg-gray-200',
    icon: 'bar-chart',
    active: false
  },
  {
    name: 'Gold',
    apy: '12% APY',
    minAmount: '$2500+',
    bgColor: 'bg-gray-500',
    borderColor: 'border-gray-400',
    iconBg: 'bg-gray-200',
    icon: 'users',
    active: false
  },
  {
    name: 'Platinum',
    apy: '15% APY',
    minAmount: '$6000+',
    bgColor: 'bg-gray-500',
    borderColor: 'border-gray-400',
    iconBg: 'bg-gray-200',
    icon: 'crown',
    active: false
  },
  {
    name: 'Diamond',
    apy: '20% APY',
    minAmount: '$15000+',
    bgColor: 'bg-gray-500',
    borderColor: 'border-gray-400',
    iconBg: 'bg-gray-200',
    icon: 'diamond',
    active: false
  }
]
</script>
