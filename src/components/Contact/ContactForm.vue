<template>
  <section
    id="contact"
    class="max-w-[2000px] base-x-p mx-auto relative z-10 mt-[120px] max-xl:mt-[100px] max-lg:mt-16 max-md:mt-10"
  >
    <div
      class="bg-white rounded-[30px] max-md:rounded-[25px] p-4 md:p-12 shadow-[0_4px_20px_2px_rgba(0,0,0,0.25)] shadow-black/5"
    >
      <div class="flex flex-col text-center text-black gap-7 mb-16 max-md:mb-5">
        <div class="title">
          Send us an <span class="sectitle">Official</span> Request
        </div>
        <div class="description">
          For partnerships, media inquiries, or technical account support.
        </div>
      </div>
      <form @submit.prevent="handleSubmit" class="space-y-6 max-md:space-y-1">
        <div class="grid md:grid-cols-2 gap-6 max-md:gap-1">
          <div class="space-y-2">
            <label class="text-sm text-black ml-1">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              required
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-black ml-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="name@example.com"
              class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
              required
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-md:gap-1">
          <div class="space-y-2">
            <label class="text-sm text-black ml-1">I am a</label>
            <div class="relative">
              <select
                v-model="form.role"
                class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled selected>Select your role</option>
                <option value="investor">Investor</option>
                <option value="partner">Partner</option>
                <option value="developer">Developer</option>
                <option value="other">Other</option>
              </select>
              <svg
                class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-black ml-1">Topic</label>
            <div class="relative">
              <select
                v-model="form.topic"
                class="w-full bg-[#F4F4F4] border border-[#CECECE] rounded-xl px-5 py-3 text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled selected>Select a topic</option>
                <option value="presale">Presale Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="general">General</option>
              </select>
              <svg
                class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="space-y-2 max-md:pt-3">
          <textarea
            v-model="form.message"
            placeholder="Tell us how we can help..."
            rows="4"
            class="w-full bg-[#F4F4F4] h-[140px] border border-[#CECECE] rounded-xl px-5 py-3 text-[#A5A5A5] focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none"
            required
          ></textarea>
        </div>

        <CustomButton
          type="Submit"
          text="Submit Request"
          class="!w-max gap-10 mx-auto"
        />
      </form>
    </div>
  </section>
</template>

<script setup>
import CustomButton from "@/ui/CustomButton.vue";
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  role: "",
  topic: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission
  console.log("Form submitted:", form.value);
  // You can emit an event or call an API here
};
</script>
