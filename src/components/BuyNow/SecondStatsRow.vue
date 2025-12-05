<template>
  <div class="grid grid-cols-2 gap-4">
    <!-- Investors Card -->
    <div class="bg-white rounded-3xl p-6 shadow-lg">
      <p class="text-base font-semibold tracking-tight text-black">
        INVESTORS
      </p>
      <p class="text-4xl font-semibold tracking-tight text-black mt-8">
        12,405
      </p>
      <p class="text-sm text-green-500 font-medium mt-2">
        +142 in last 24h
      </p>
      <div class="flex -space-x-2 mt-4">
        <div
          class="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"
        ></div>
        <div
          class="w-8 h-8 rounded-full bg-teal-500 border-2 border-white"
        ></div>
        <div
          class="w-8 h-8 rounded-full bg-purple-600 border-2 border-white"
        ></div>
      </div>
    </div>

    <!-- Next Price Card -->
    <StatsCard
      title="NEXT PRICE"
      value="$0.072"
      subtitle-text="Next Stage 06"
    />
  </div>
</template>

<script setup>
import StatsCard from './StatsCard.vue'
</script>
