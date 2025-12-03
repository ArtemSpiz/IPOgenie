<template>
  <div class="relative">
    <div :class="blurClass" class="absolute inset-0 blur-3xl rounded-3xl opacity-60"></div>
    <div :class="cardClass" class="relative rounded-3xl overflow-hidden border shadow-lg">
      <div class="relative">
        <div :class="imageClass" class="mx-auto mt-4 w-10/12 aspect-[1231/835] rounded-3xl"></div>
      </div>
      <div class="mt-6 px-6 pb-6">
        <div class="text-center">
          <div class="text-sm font-bold tracking-tight text-neutral-900" style="font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            {{ price }}
          </div>
          <div class="mt-1 text-3xl font-extrabold tracking-tight text-neutral-900" style="font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            {{ name }}
          </div>
          <p class="mt-3 text-sm text-neutral-800">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  blurClass: {
    type: String,
    required: true
  },
  cardClass: {
    type: String,
    required: true
  },
  imageClass: {
    type: String,
    required: true
  }
})
</script>

