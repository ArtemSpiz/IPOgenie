<template>
  <section class="mt-10 mb-24">
    <div class="mx-auto max-w-6xl px-4">
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-center">
        <TierCard
          v-for="tier in tiers"
          :key="tier.name"
          :name="tier.name"
          :price="tier.price"
          :description="tier.description"
          :blur-class="tier.blurClass"
          :card-class="tier.cardClass"
          :image-class="tier.imageClass"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TierCard from './TierCard.vue'

const tiers = [
  {
    name: 'Bronze',
    price: '$2500',
    description: 'Access to core deals,basic staking rewards',
    blurClass: 'bg-gradient-to-tr from-[#ff5b00] via-white to-transparent',
    cardClass: 'bg-gradient-to-br from-white via-white to-[#ff5b00]/40 border border-[#ff5b00]/40 shadow-[0_40px_100px_-44px_rgba(255,91,0,0.8)]',
    imageClass: 'bg-gradient-to-br from-amber-900 via-amber-700 to-amber-500'
  },
  {
    name: 'Silver',
    price: '$12,000',
    description: 'Priority allocations,enhanced staking APY',
    blurClass: 'bg-gradient-to-tr from-slate-400 via-white to-transparent',
    cardClass: 'bg-gradient-to-br from-white via-white to-slate-300/50 border border-slate-300/60 shadow-[0_40px_100px_-44px_rgba(148,163,184,0.9)]',
    imageClass: 'bg-gradient-to-br from-slate-500 via-slate-200 to-slate-50'
  },
  {
    name: 'Gold',
    price: '$55,000',
    description: 'Early access, guaranteed allocations,deal voting rights',
    blurClass: 'bg-gradient-to-tr from-amber-300 via-white to-transparent',
    cardClass: 'bg-gradient-to-br from-white via-white to-amber-200/70 border border-amber-300/70 shadow-[0_40px_100px_-44px_rgba(250,204,21,0.9)]',
    imageClass: 'bg-gradient-to-br from-yellow-500 via-amber-400 to-amber-200'
  },
  {
    name: 'Platinum',
    price: '$110,000',
    description: 'Access to all deals,anytime allocation, investment insurance',
    blurClass: 'bg-gradient-to-tr from-neutral-700 via-white to-transparent',
    cardClass: 'bg-gradient-to-br from-white via-white to-neutral-800/80 border border-neutral-800/70 shadow-[0_40px_100px_-44px_rgba(15,23,42,0.9)]',
    imageClass: 'bg-gradient-to-br from-zinc-300 via-zinc-700 to-black'
  }
]
</script>

