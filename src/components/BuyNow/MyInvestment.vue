<template>
  <div class="bg-white rounded-[20px] p-3 sm:p-8 mt-4 sm:mt-6">
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 mb-4"
    >
      <h2
        class="text-black text-5xl max-lg:text-3xl max-md:text-[22px] font-bold tracking-tight"
      >
        My Investment
      </h2>
      <div class="flex items-center gap-3 max-md:justify-between max-md:w-full">
        <span class="text-xs sm:text-xl text-gray-500 font-medium">
          Wallet Connected
        </span>
        <div
          class="bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-sm font-medium"
        >
          0x71 . . . . . . . . . . . . .93A2
        </div>
      </div>
    </div>

    <div class="border-t border-black/20 pt-6 max-md:pt-3 mt-4">
      <div class="flex lex-row justify-between gap-4 sm:gap-0 mb-4">
        <div class="">
          <p
            class="text-base sm:text-xl text-gray-500 font-semibold tracking-tight"
          >
            TOTAL ALLOCATED
          </p>
          <p
            class="text-black !leading-[80%] text-5xl max-lg:text-3xl max-md:text-[22px] font-bold tracking-tight"
          >
            101,220 $IPO
          </p>
        </div>
        <div class="text-right">
          <p
            class="text-base sm:text-xl text-gray-500 font-semibold tracking-tight"
          >
            CURRENT VALUE
          </p>
          <p
            class="text-black !leading-[80%] text-5xl max-lg:text-3xl max-md:text-[22px] font-bold tracking-tight"
          >
            $850.39
          </p>
          <p class="text-[10px] sm:text-xl text-green-500 font-medium">
            Presale Price
          </p>
        </div>
      </div>
    </div>

    <div
      class="border-t border-black/20 pt-6 mt-4 max-md:pt-3 px-20 max-md:px-0"
    >
      <h3
        class="text-lg text-black md:text-3xl max-md:mb-5 font-bold tracking-tight mb-2"
      >
        Staking Tiers
      </h3>
      <p class="text-base max-md:hidden text-gray-500 mb-6">
        Level up your APY
      </p>

      <div class="w-full h-auto">
        <img
          :src="isMobile ? InvestmentImgMob : InvestmentImg"
          class="object-contain"
        />
      </div>
    </div>

    <!-- Staking Details -->
    <div
      class="mt-6 mr-auto ml-auto space-y-2 max-md:gap-1 max-md:space-x-0 px-20 max-md:px-0"
    >
      <div class="flex justify-between">
        <span class="text-xs sm:text-xl text-gray-500 font-semibold">
          Spend:
        </span>
        <span class="text-xs sm:text-xl text-gray-500 font-semibold">
          $1000
        </span>
      </div>
      <div class="flex justify-between">
        <span class="text-xs sm:text-xl text-gray-500 font-semibold"
          >Staked:</span
        >
        <span class="text-xs sm:text-xl text-orange-500 font-semibold">
          $IPO 234,58358
        </span>
      </div>
      <div class="flex justify-between">
        <span class="text-xs sm:text-xl text-gray-500 font-semibold">
          Current Tier:
        </span>
        <span class="text-xs sm:text-xl text-gray-500 font-semibold"
          >Bronze</span
        >
      </div>
    </div>

    <div class="px-20 max-md:px-0 pt-[10px] mx-auto">
      <div
        class="flex justify-between pt-3 border-t border-black/20 text-[#CACACA]"
      >
        <span class="text-xs sm:text-xl font-medium">Unlock:</span>
        <span class="text-xs sm:text-xl font-medium">
          Spend $150 more to unlock staking
        </span>
      </div>
    </div>

    <!-- Unlock Banner -->
    <div
      class="bg-gray-200 max-w-[850px] rounded-2xl max-md:rounded-[12px] py-3 sm:py-4 mt-6 max-md:mt-4 flex items-center justify-center gap-2 sm:gap-3 mx-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 9.33337C7 7.47686 7.7375 5.69638 9.05025 4.38363C10.363 3.07087 12.1435 2.33337 14 2.33337C15.8565 2.33337 17.637 3.07087 18.9497 4.38363C20.2625 5.69638 21 7.47686 21 9.33337H22.1667C22.7855 9.33337 23.379 9.57921 23.8166 10.0168C24.2542 10.4544 24.5 11.0479 24.5 11.6667V23.3334C24.5 23.9522 24.2542 24.5457 23.8166 24.9833C23.379 25.4209 22.7855 25.6667 22.1667 25.6667H5.83333C5.21449 25.6667 4.621 25.4209 4.18342 24.9833C3.74583 24.5457 3.5 23.9522 3.5 23.3334V11.6667C3.5 11.0479 3.74583 10.4544 4.18342 10.0168C4.621 9.57921 5.21449 9.33337 5.83333 9.33337H7ZM14 4.66671C15.2377 4.66671 16.4247 5.15837 17.2998 6.03354C18.175 6.90871 18.6667 8.0957 18.6667 9.33337H9.33333C9.33333 8.0957 9.825 6.90871 10.7002 6.03354C11.5753 5.15837 12.7623 4.66671 14 4.66671ZM16.3333 16.3334C16.3333 16.743 16.2255 17.1453 16.0207 17.5C15.8159 17.8547 15.5214 18.1493 15.1667 18.354V19.8334C15.1667 20.1428 15.0437 20.4395 14.825 20.6583C14.6062 20.8771 14.3094 21 14 21C13.6906 21 13.3938 20.8771 13.175 20.6583C12.9562 20.4395 12.8333 20.1428 12.8333 19.8334V18.354C12.3885 18.0972 12.0409 17.7008 11.8444 17.2262C11.6478 16.7517 11.6133 16.2256 11.7463 15.7295C11.8792 15.2333 12.1721 14.7949 12.5796 14.4822C12.9871 14.1696 13.4864 14.0001 14 14C14.6188 14 15.2123 14.2459 15.6499 14.6835C16.0875 15.121 16.3333 15.7145 16.3333 16.3334Z"
          fill="#8C8C8C"
        />
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
import InvestmentImgMob from "@/assets/img/BuyNow/InvestmentImgMob.png";

const isMobile = window.innerWidth < 768;
</script>
