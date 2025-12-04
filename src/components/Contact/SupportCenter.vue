<template>
  <section class="max-w-[1320px] mx-auto px-4 mb-32">
    <div class="flex flex-col items-center text-center mb-16">
      <span class="bg-orange/10 text-orange font-poppins font-semibold px-6 py-2 rounded-full mb-6 uppercase tracking-wider text-sm">
        {{ badge }}
      </span>
      <h2 class="font-inter font-bold text-4xl md:text-6xl text-black mb-6 tracking-tight">
        {{ title }}
        <span class="italic text-gray-400 font-serif">{{ titleItalic }}</span>
      </h2>
      <p class="font-poppins text-xl text-black/60 max-w-2xl">
        {{ description }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <a 
        v-for="support in supportLinks" 
        :key="support.name"
        :href="support.href" 
        :class="support.bgClass"
        class="group rounded-[32px] p-8 transition-all duration-300 flex items-center justify-between"
      >
        <div class="flex items-center gap-6">
          <div :class="support.iconBgClass" class="w-16 h-16 text-white rounded-2xl flex items-center justify-center transition-colors shadow-lg">
            <svg v-if="support.icon === 'TelegramIcon'" class="w-8 h-8 -ml-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <svg v-else-if="support.icon === 'TwitterIcon'" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </div>
          <div class="text-left">
            <h3 :class="support.titleClass" class="font-inter font-bold text-2xl transition-colors">
              {{ support.title }}
            </h3>
            <p :class="support.descriptionClass" class="font-poppins transition-colors">
              {{ support.description }}
            </p>
          </div>
        </div>
        <div :class="support.arrowClass" class="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
          <svg class="w-6 h-6 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    default: '24/7 Support Center'
  },
  title: {
    type: String,
    default: 'Need Answers'
  },
  titleItalic: {
    type: String,
    default: 'Fast?'
  },
  description: {
    type: String,
    default: 'Skip the email queue. Join our global community for 24/7 support, live updates, and direct access to the team.'
  }
})

const supportLinks = [
  {
    name: 'Telegram',
    href: '#',
    title: 'Join Telegram Chat',
    description: '24/7 Live Support & Community',
    bgClass: 'bg-[#2AABEE]/5 border border-[#2AABEE]/20 hover:bg-[#2AABEE] hover:border-[#2AABEE]',
    iconBgClass: 'bg-[#2AABEE] group-hover:bg-white group-hover:text-[#2AABEE]',
    titleClass: 'text-black group-hover:text-white',
    descriptionClass: 'text-black/60 group-hover:text-white/80',
    arrowClass: 'bg-white/0 group-hover:bg-white/20',
    icon: 'TelegramIcon'
  },
  {
    name: 'Twitter/X',
    href: '#',
    title: 'Follow on X',
    description: 'Latest Announcements & Alpha',
    bgClass: 'bg-black/5 border border-black/10 hover:bg-black hover:border-black',
    iconBgClass: 'bg-black group-hover:bg-white group-hover:text-black',
    titleClass: 'text-black group-hover:text-white',
    descriptionClass: 'text-black/60 group-hover:text-white/80',
    arrowClass: 'bg-white/0 group-hover:bg-white/20',
    icon: 'TwitterIcon'
  }
]
</script>

