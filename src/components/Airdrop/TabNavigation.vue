<template>
  <div class="flex gap-2 mb-6 mt-[130px]">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('switch-tab', tab.id)"
      :class="[
        'px-4 py-3 rounded-xl text-base transition-all',
        activeTab === tab.id
          ? 'bg-[#FF5C01] text-white border-none'
          : 'bg-[#0f0e0e] text-white border border-white/8',
      ]"
      style="font-family: 'Poppins', sans-serif"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});

defineEmits(["switch-tab"]);

const tabs = [
  { id: "airdrop", label: "Airdrop" },
  { id: "upcoming", label: "Upcoming" },
  { id: "closed", label: "Closed" },
];
</script>
