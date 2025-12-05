<template>
  <div class="bg-white rounded-3xl p-4 sm:p-8 mt-4 sm:mt-6">
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4"
    >
      <h2 class="text-3xl text-black sm:text-5xl font-bold tracking-tight">
        My Investment
      </h2>
      <div class="flex items-center gap-3">
        <span class="text-sm sm:text-xl text-gray-500 font-medium">
          Wallet Connected
        </span>
        <div
          class="bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium"
        >
          0x71 . . . . . . . . . . . . .93A2
        </div>
      </div>
    </div>

    <div class="border-t border-black/20 pt-6 mt-4">
      <div
        class="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mb-4"
      >
        <div class="">
          <p
            class="text-base sm:text-xl text-gray-500 font-semibold tracking-tight"
          >
            TOTAL ALLOCATED
          </p>
          <p
            class="text-3xl text-black sm:text-5xl font-bold tracking-tight mt-2"
          >
            101,220 $IPO
          </p>
        </div>
        <div class="sm:text-right">
          <p
            class="text-base sm:text-xl text-gray-500 font-semibold tracking-tight"
          >
            CURRENT VALUE
          </p>
          <p
            class="text-3xl text-black sm:text-5xl font-bold tracking-tight mt-2"
          >
            $850.39
          </p>
          <p class="text-base sm:text-xl text-green-500 font-medium">
            Presale Price
          </p>
        </div>
      </div>
    </div>

    <div class="border-t border-black/20 pt-6 mt-4 px-20">
      <h3 class="text-2xl text-black sm:text-3xl font-bold tracking-tight mb-2">
        Staking Tiers
      </h3>
      <p class="text-base text-gray-500 mb-6">Level up your APY</p>

      <div class="w-full h-auto">
        <img :src="InvestmentImg" class="object-contain" />
      </div>
    </div>

    <!-- Staking Details -->
    <div class="mt-6 mr-auto ml-auto space-y-2 px-20">
      <div class="flex justify-between">
        <span class="text-base sm:text-xl text-gray-500 font-semibold">
          Spend:
        </span>
        <span class="text-base sm:text-xl text-gray-500 font-semibold">
          $1000
        </span>
      </div>
      <div class="flex justify-between">
        <span class="text-xl text-gray-500 font-semibold">Staked:</span>
        <span class="text-xl text-orange-500 font-semibold">
          $IPO 234,58358
        </span>
      </div>
      <div class="flex justify-between">
        <span class="text-xl text-gray-500 font-semibold"> Current Tier: </span>
        <span class="text-xl text-gray-500 font-semibold">Bronze</span>
      </div>
    </div>

    <div class="px-20 pt-[10px] mx-auto">
      <div
        class="flex justify-between pt-3 border-t border-black/20 text-gray-400"
      >
        <span class="text-xl font-semibold">Unlock:</span>
        <span class="text-xl font-semibold">
          Spend $150 more to unlock staking
        </span>
      </div>
    </div>

    <!-- Unlock Banner -->
    <div
      class="bg-gray-200 max-w-[850px] rounded-2xl py-3 sm:py-4 mt-6 flex items-center justify-center gap-2 sm:gap-3 mx-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <span
        class="text-base sm:text-2xl text-gray-500 font-semibold tracking-tight"
      >
        Spend $150 more to unlock
      </span>
    </div>
  </div>
</template>

<script setup>
import InvestmentImg from "@/assets/img/BuyNow/InvestmentImg.png";
</script>
