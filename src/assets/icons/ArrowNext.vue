<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="30"
    viewBox="0 0 15 30"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.6962 15.8886L5.62492 22.9598L3.85742 21.1923L10.0449 15.0048L3.85742 8.8173L5.62492 7.0498L12.6962 14.1211C12.9305 14.3555 13.0622 14.6733 13.0622 15.0048C13.0622 15.3363 12.9305 15.6541 12.6962 15.8886Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script setup>
defineProps({
  fillColor: {
    type: String,
    default: "#221D36",
  },
});
</script>
