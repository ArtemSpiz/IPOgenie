<template>
  <div class="bg-white rounded-3xl p-6 shadow-lg">
    <p class="text-base font-semibold tracking-tight text-black">
      {{ title }}
    </p>
    <p
      class="text-2xl sm:text-4xl font-semibold tracking-tight text-black mt-4 sm:mt-8"
    >
      {{ value }}
    </p>
    <p v-if="subtitle" class="text-sm mt-2">
      <span v-if="highlight" :class="highlightClass">{{ highlight }}</span>
      <span v-if="subtitleText" class="text-black font-medium">{{ subtitleText }}</span>
    </p>
    <div v-if="progress" class="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        class="h-full bg-orange-500 rounded-full"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  },
  highlight: {
    type: String,
    default: null
  },
  highlightClass: {
    type: String,
    default: 'text-green-500 font-medium'
  },
  subtitleText: {
    type: String,
    default: null
  },
  progress: {
    type: Number,
    default: null
  }
})
</script>
