<script setup>
defineProps({
  title: {
    type: String,
    default: "Top Referrers",
  },
  subtitle: {
    type: String,
    default: "Earn rewards by inviting friends to the presale.",
  },
  tableData: {
    type: Array,
    required: true,
  },
  tableNames: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col w-full items-center gap-10 max-md:gap-9 justify-center"
  >
    <!-- Header -->
    <div class="flex flex-col gap-2 text-center">
      <div class="text-[32px] text-black font-bold">Top Referrers</div>
      <div class="text-sm text-[#8C8C8C]">
        Earn rewards by inviting friends to the presale.
      </div>
    </div>

    <!-- Table -->
    <div
      class="w-full max-w-[770px] py-7 px-6 max-md:px-3 max-md:py-7 rounded-[40px] max-md:rounded-[20px] bg-gradient-to-r from-[#FF8C00] to-[#FF5B00] border border-[#D3D3D3] flex flex-col gap-4 max-md:gap-2"
    >
      <!-- Table Header -->
      <div class="grid grid-cols-4 max-md:text-[10px] text-white font-bold text-xl">
        <div v-for="(row, index) in tableNames" :key="index">
          {{ row.title }}
        </div>
      </div>
      <div class="border-t border-white/30"></div>

      <!-- Table Rows -->
      <div
        v-for="(row, index) in tableData"
        :key="index"
        class="grid grid-cols-4 max-md:border-white/30 max-md:border-b text-white max-md:text-xs items-center py-3"
        :class="{ 'border-none': index === 3 }"
      >
        <div>{{ row.rank }}.</div>
        <div>{{ row.user }}</div>
        <div>{{ row.total }}</div>
        <div>{{ row.reward }}</div>
      </div>
    </div>
  </div>
</template>
