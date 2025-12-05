<template>
  <div class="text-center flex flex-col items-center flex-shrink-0">
    <div
      :class="[
        'text-xs font-semibold px-2 sm:px-3 py-1 rounded-md mb-3 relative',
        tier.bgColor,
        tier.name === 'Starter' ? 'bg-white text-black' : 'text-white'
      ]"
      style="border-radius: 6px"
    >
      {{ tier.apy }}
      <div
        :class="[
          'absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45',
          tier.name === 'Starter' ? 'bg-orange-500' : tier.bgColor
        ]"
      ></div>
    </div>
    <div
      :class="['w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white border-4 shadow-lg flex items-center justify-center', tier.borderColor]"
    >
      <div
        :class="['w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center', tier.iconBg]"
      >
        <component :is="iconComponent" />
      </div>
    </div>
    <p class="text-xs sm:text-sm font-semibold mt-2 sm:mt-3">
      {{ tier.name }}
    </p>
    <p class="text-xs text-gray-500 font-medium">{{ tier.minAmount }}</p>
  </div>
</template>

<script setup>
import { h, computed } from 'vue'

const props = defineProps({
  tier: {
    type: Object,
    required: true
  }
})

const getIconComponent = () => {
  const icons = {
    star: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'h-4 w-4 sm:h-5 sm:w-5',
      viewBox: '0 0 24 24',
      fill: 'white',
      stroke: 'white',
      'stroke-width': '1.5'
    }, [
      h('path', {
        d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'
      })
    ]),
    award: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'h-4 w-4 sm:h-5 sm:w-5',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'white',
      'stroke-width': '1.5'
    }, [
      h('path', {
        d: 'M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15'
      }),
      h('path', { d: 'M11 12 5.12 2.2' }),
      h('path', { d: 'm13 12 5.88-9.8' }),
      h('path', { d: 'M8 7h8' }),
      h('circle', { cx: '12', cy: '17', r: '5' }),
      h('path', { d: 'M12 18v-2h-.5' })
    ]),
    'bar-chart': () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.5',
      class: 'text-gray-500'
    }, [
      h('path', { d: 'M3 3v18h18' }),
      h('path', { d: 'M7 16v-3' }),
      h('path', { d: 'M11 16v-6' }),
      h('path', { d: 'M15 16v-4' })
    ]),
    users: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.5',
      class: 'text-gray-500'
    }, [
      h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: '9', cy: '7', r: '4' }),
      h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
      h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ]),
    crown: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.5',
      class: 'text-gray-500'
    }, [
      h('path', {
        d: 'M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z'
      }),
      h('path', { d: 'M5 21h14' })
    ]),
    diamond: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.5',
      class: 'text-gray-500'
    }, [
      h('path', {
        d: 'M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z'
      })
    ])
  }

  return icons[props.tier.icon] || icons.star
}

const iconComponent = computed(() => getIconComponent())
</script>
