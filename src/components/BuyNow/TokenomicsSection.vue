<template>
  <div class="max-w-7xl mx-auto px-4 mt-4 sm:mt-6">
    <div class="sm:p-8 overflow-hidden bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
      <!-- Tabs -->
      <div class="flex sm:gap-12 overflow-x-auto border-black/20 border-b mb-6 pb-4 gap-x-6 gap-y-6 items-center">
        <div class="relative flex-shrink-0">
          <div class="bg-orange-100 rounded-full px-6 sm:px-8 py-2 sm:py-3">
            <span class="text-lg sm:text-xl font-semibold text-orange-500 tracking-tight">
              Tokenomics
            </span>
          </div>
        </div>
        <span 
          class="sm:text-xl flex-shrink-0 cursor-pointer hover:text-gray-600 text-lg font-semibold text-gray-400 tracking-tight"
          @click="activeTab = 'referral'"
        >
          Referral Leader Board
        </span>
        <span 
          class="text-lg sm:text-xl font-semibold text-gray-400 tracking-tight flex-shrink-0 cursor-pointer hover:text-gray-600"
          @click="activeTab = 'investors'"
        >
          Top Investors
        </span>
      </div>

      <div v-if="activeTab === 'tokenomics'" class="grid lg:grid-cols-2 gap-8">
        <!-- Left Column - Distribution List -->
        <div class="">
          <h3 class="sm:text-3xl text-2xl font-bold tracking-tight font-inter mb-6">
            Global Token Distribution
          </h3>

          <div class="space-y-4">
            <div 
              v-for="item in distribution" 
              :key="item.percentage"
              class=""
            >
              <span class="inline-block bg-gray-900 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                {{ item.percentage }}% - {{ item.label }}
              </span>
              <p class="text-sm text-black/70 mt-1">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column - Pie Chart -->
        <div class="flex items-center justify-center relative">
          <div class="relative w-64 h-64 sm:w-80 sm:h-80">
            <!-- Pie Chart SVG -->
            <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
              <!-- 50% Presale - Orange -->
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ff5b00" 
                stroke-width="20" 
                :stroke-dasharray="`${125.6} 125.6`" 
                stroke-dashoffset="0"
              ></circle>
              <!-- 20% Liquidity - Light Orange -->
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ff7c33" 
                stroke-width="20" 
                :stroke-dasharray="`50.24 200.96`" 
                stroke-dashoffset="-125.6"
              ></circle>
              <!-- 18% Community - Peach -->
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ff9d66" 
                stroke-width="20" 
                :stroke-dasharray="`45.24 205.96`" 
                stroke-dashoffset="-175.84"
              ></circle>
              <!-- 7% Staking - Light Peach -->
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ffbd99" 
                stroke-width="20" 
                :stroke-dasharray="`17.6 233.6`" 
                stroke-dashoffset="-221.08"
              ></circle>
              <!-- 5% Team - Cream -->
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#ffdecc" 
                stroke-width="20" 
                :stroke-dasharray="`12.56 238.64`" 
                stroke-dashoffset="-238.68"
              ></circle>
            </svg>

            <!-- Labels -->
            <div class="absolute" style="top: 5%; right: 15%; text-align: left;">
              <p class="text-sm font-medium">Team</p>
              <span class="inline-block bg-orange-200 text-xs font-medium px-2 py-0.5 rounded-md">
                5%
              </span>
            </div>
            <div class="absolute" style="top: 22%; left: 5%; text-align: left;">
              <p class="text-sm font-medium">
                Staking Rewards
              </p>
              <span class="inline-block bg-orange-300 text-xs font-medium px-2 py-0.5 rounded-md">
                7%
              </span>
            </div>
            <div class="absolute" style="bottom: 30%; left: 0%; text-align: left;">
              <p class="text-sm font-medium">
                Community Rewards
              </p>
              <span class="inline-block bg-orange-400 text-white text-xs font-medium px-2 py-0.5 rounded-md">
                18%
              </span>
            </div>
            <div class="absolute" style="bottom: 8%; left: 25%; text-align: left;">
              <p class="text-sm font-medium">
                Liquidity &amp; Exchange
              </p>
              <span class="inline-block bg-orange-500 text-white text-xs font-medium px-2 py-0.5 rounded-md">
                20%
              </span>
            </div>
            <div class="absolute" style="top: 40%; right: -5%; text-align: left;">
              <p class="text-sm font-medium">Presale</p>
              <span class="inline-block bg-orange-500 text-white text-xs font-medium px-2 py-0.5 rounded-md">
                50%
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Tabs Content (можно додати пізніше) -->
      <div v-if="activeTab === 'referral'" class="text-center py-12">
        <p class="text-gray-500">Referral Leader Board - Coming Soon</p>
      </div>
      <div v-if="activeTab === 'investors'" class="text-center py-12">
        <p class="text-gray-500">Top Investors - Coming Soon</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('tokenomics')

const distribution = [
  {
    percentage: 50,
    label: 'Presale',
    description: 'Available for crypto presale participants with stage-based pricing.'
  },
  {
    percentage: 20,
    label: 'Liquidity & Exchanges',
    description: 'Allocated to DEX/CEX liquidity to support smooth trading and stability.'
  },
  {
    percentage: 18,
    label: 'Community Rewards',
    description: 'Released gradually based on ecosystem growth, activity, and milestones.'
  },
  {
    percentage: 7,
    label: 'Staking Rewards',
    description: 'Released gradually based on ecosystem growth, activity, and milestones.'
  },
  {
    percentage: 5,
    label: 'Team',
    description: 'Released gradually based on ecosystem growth, activity, and milestones.'
  }
]
</script>
