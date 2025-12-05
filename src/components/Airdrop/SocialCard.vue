<template>
  <div
    :class="[
      'rounded-2xl p-5 md:p-6 flex items-center justify-between',
      cardClass
    ]"
  >
    <div>
      <h4
        class="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight"
        style="
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.04em;
        "
      >
        {{ title }}
      </h4>
      <p
        class="mt-1 text-xs text-white opacity-90"
        style="
          font-family: 'Poppins', sans-serif;
          letter-spacing: -0.02em;
        "
      >
        {{ description }}
      </p>
    </div>
    <div :class="iconWrapperClass">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cardClass: {
    type: String,
    default: ''
  },
  iconWrapperClass: {
    type: String,
    default: 'w-12 h-12 flex items-center justify-center'
  }
})
</script>
