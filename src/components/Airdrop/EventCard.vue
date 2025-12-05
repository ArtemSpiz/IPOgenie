<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-sm mb-6">
    <div class="p-6 md:p-8 lg:p-10">
      <div
        class="flex flex-col md:flex-row md:items-start md:justify-between mb-4"
      >
        <div>
          <span
            class="inline-block px-4 py-2 rounded-lg border border-[#FF5B00] text-[#FF5B00] text-sm mb-4"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ status }}
          </span>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight"
            style="
              font-family: 'Inter', sans-serif;
              letter-spacing: -0.04em;
            "
          >
            {{ title }}
          </h2>
        </div>
        <div class="mt-4 md:mt-0 text-left md:text-right">
          <p
            class="text-sm text-gray-500 uppercase tracking-wide"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ outcomeLabel }}
          </p>
          <p
            class="text-lg md:text-xl font-semibold text-[#FF5B00]"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ outcome }}
          </p>
        </div>
      </div>

      <p
        class="text-base md:text-lg text-black mb-6"
        style="
          font-family: 'Poppins', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1.5;
        "
      >
        {{ description }}
      </p>

      <div class="bg-[#f5f5f5] rounded-xl p-4 mb-6">
        <div
          v-for="(detail, index) in details"
          :key="index"
          :class="{ 'mb-2': index < details.length - 1 }"
        >
          <span
            class="text-sm text-gray-500"
            style="font-family: 'Poppins', sans-serif"
          >{{ detail.label }}:</span>
          <span
            class="text-sm text-gray-600 ml-2"
            style="font-family: 'Poppins', sans-serif"
          >{{ detail.value }}</span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <div
          :class="[
            'w-6 h-6 rounded-full flex items-center justify-center',
            statusIconClass
          ]"
        >
          <svg
            v-if="statusType === 'completed'"
            class="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span
            v-else-if="statusType === 'pending'"
            class="text-white text-xs font-bold"
          >!</span>
        </div>
        <span
          :class="[
            'text-base',
            statusType === 'pending' ? 'text-gray-500 italic' : 'text-black'
          ]"
          style="font-family: 'Poppins', sans-serif"
        >{{ statusMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  outcomeLabel: {
    type: String,
    required: true
  },
  outcome: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details: {
    type: Array,
    required: true
  },
  statusType: {
    type: String,
    default: 'completed', // 'completed' or 'pending'
    validator: (value) => ['completed', 'pending'].includes(value)
  },
  statusMessage: {
    type: String,
    required: true
  }
})

const statusIconClass = computed(() => {
  return props.statusType === 'completed'
    ? 'bg-green-500'
    : 'bg-yellow-500'
})
</script>
