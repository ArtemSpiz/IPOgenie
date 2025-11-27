<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M13.7272 1.00001L0.99932 13.7279M13.7272 1.00001V13.7279M13.7272 1.00001H0.99932"
      :stroke="strokeColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  strokeColor: {
    type: String,
    default: "#FF5B00",
  },
});
</script>
