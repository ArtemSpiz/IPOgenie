<template>
  <div class="max-w-7xl mx-auto px-4 mt-4 sm:mt-6 pb-8">
    <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-8 font-inter">
      How To Buy
      <span class="italic font-semibold">IPO Genie</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div 
        v-for="(step, index) in steps" 
        :key="index"
        class="bg-white rounded-3xl p-5 relative overflow-hidden"
      >
        <span 
          class="absolute top-4 left-4 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-white font-inter opacity-50"
        >
          {{ index + 1 }}
        </span>
        <div class="mt-16 mb-4">
          <img 
            :src="step.image" 
            :alt="step.title" 
            class="w-full h-32 object-cover rounded-xl"
          >
        </div>
        <h4 class="text-base font-semibold tracking-tight font-inter">
          {{ step.title }}
        </h4>
        <p class="text-xs text-black/70 mt-1">
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: 'Connect Your Wallet',
    description: 'Use WalletConnect to link any Web3 wallet and get ready to join the crypto presale immediately.',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=280&h=143&fit=crop'
  },
  {
    title: 'Choose Your Currency',
    description: 'Pay with ETH, BTC, BNB, USDT, SOL - all supported for fast, secure transactions.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=280&h=143&fit=crop'
  },
  {
    title: 'Enter Amount & Buy',
    description: 'Select your allocation and complete a verified on-chain transaction in seconds.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=280&h=143&fit=crop'
  },
  {
    title: 'Receive Your $IPO Token',
    description: 'Tokens are delivered safely to your wallet after purchase or at the end of the presale.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=280&h=143&fit=crop'
  }
]
</script>
