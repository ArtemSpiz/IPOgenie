<template>
  <div class="flex flex-col items-center gap-3">
    <div class="bg-white rounded-3xl overflow-hidden shadow-sm">
      <div class="p-6 md:p-8 lg:p-10">
        <div
          class="flex flex-col md:flex-row md:items-start md:justify-between mb-10"
        >
          <div>
            <span
              class="inline-block px-4 py-2 bg-[rgba(255,35,1,0.28)] rounded-lg border border-[#FF2301] text-[#FF2301] text-sm mb-4"
            >
              {{ status }}
            </span>
            <h2
              class="text-3xl font-inter md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight"
            >
              {{ title }}
            </h2>
          </div>
          <div class="mt-4 md:mt-0 text-left md:text-right">
            <p
              class="text-sm text-[#8C8C8C] font-bold leading-[142%] uppercase tracking-wide"
            >
              {{ outcomeLabel }}
            </p>
            <p
              class="text-lg max-md:text-base leading-[140%] font-semibold text-[#FF5B00]"
            >
              {{ outcome }}
            </p>
          </div>
        </div>

        <p class="text-base leading-tight md:text-lg text-black mb-3">
          {{ description }}
        </p>

        <div class="bg-[#f5f5f5] rounded-xl p-5 mb-5">
          <div
            v-for="(detail, index) in details"
            :key="index"
            :class="{ 'mb-2': index < details.length - 1 }"
          >
            <span
              class="text-sm text-gray-500"
              style="font-family: 'Poppins', sans-serif"
              >{{ detail.label }}:</span
            >
            <span
              class="text-sm text-gray-600 ml-2"
              style="font-family: 'Poppins', sans-serif"
              >{{ detail.value }}</span
            >
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div
            :class="['w-6 h-6 rounded-full flex items-center justify-center']"
          >
            <GreenMark v-if="statusType === 'completed'" />
            <Warning v-else-if="statusType === 'pending'" />
          </div>
          <span
            :class="[
              'text-base',
              statusType === 'pending' ? 'text-gray-500 italic' : 'text-black',
            ]"
            style="font-family: 'Poppins', sans-serif"
            >{{ statusMessage }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GreenMark from "@/assets/icons/GreenMark.vue";
import Warning from "@/assets/icons/Warning.vue";
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  outcomeLabel: {
    type: String,
    required: true,
  },
  outcome: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  statusType: {
    type: String,
    default: "completed", // 'completed' or 'pending'
    validator: (value) => ["completed", "pending"].includes(value),
  },
  statusMessage: {
    type: String,
    required: true,
  },
});
</script>
