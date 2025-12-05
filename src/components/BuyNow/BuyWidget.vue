<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-lg">
    <!-- Countdown Header -->
    <CountdownTimer />

    <div class="p-6 max-md:px-8 max-md:py-5">
      <!-- USD Raised -->
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-1">
          <span class="text-sm text-black/50 font-medium font-inter">
            USD Raised
          </span>
          <span
            class="text-lg text-black max-md:text-sm font-semibold font-inter"
          >
            {{ formatCurrency(usdRaised) }}
          </span>
        </div>

        <span class="text-lg text-black max-md:text-sm font-inter"
          >{{ progressPercentage }}%</span
        >
      </div>

      <!-- Input Range Progress Bar -->
      <input
        type="range"
        min="0"
        :max="TOTAL_RAISE_GOAL"
        v-model.number="usdRaised"
        class="w-full h-5 rounded-full cursor-pointer range-orange"
      />

      <!-- Buy Options -->
      <p
        class="text-lg max-md:text-sm text-black font-bold font-inter mt-5 mb-3 max-sm:mb-2"
      >
        You Buy With
      </p>
      <div
        class="grid text-black grid-cols-2 gap-3 max-md:gap-2 max-md:mb-2 mb-4 max-md:grid-cols-1"
      >
        <button
          v-for="method in paymentMethods"
          :key="method.id"
          class="border rounded-xl py-3 px-4 flex items-center gap-2 text-left transition-colors"
          :class="{
            'border-orange-500 bg-orange-50': paymentMethod === method.id,
            'border-black/50 hover:border-black/70':
              paymentMethod !== method.id,
          }"
          @click="selectPaymentMethod(method.id)"
        >
          <div
            class="w-4 h-4 rounded-full flex items-center justify-center transition-colors"
            :class="{
              'bg-orange-500': paymentMethod === method.id,
              'bg-black/50': paymentMethod !== method.id,
            }"
          >
            <div
              v-if="paymentMethod === method.id"
              class="w-2.5 h-2.5 bg-white rounded-full"
            ></div>
          </div>
          <span class="text-xs font-medium font-inter">{{ method.label }}</span>
          <span v-if="method.sublabel" class="text-xs text-black/50 font-inter">
            ({{ method.sublabel }})
          </span>
        </button>
      </div>

      <!-- Crypto Selection Grid -->
      <div v-if="paymentMethod === 'crypto'" class="mb-4 space-y-2">
        <!-- First Row -->
        <div class="flex gap-2 text-black relative">
          <div
            v-for="(crypto, index) in isMobile
              ? cryptoList.slice(0, 1)
              : cryptoList.slice(0, 3)"
            :key="crypto.id"
            class="flex-1 relative"
          >
            <button
              class="border w-full justify-between rounded-xl py-2.5 px-3 flex items-center gap-2 transition-colors hover:border-orange-500/50"
              :class="{
                'border-orange-500 bg-orange-50': selectedCrypto === crypto.id,
                'border-black/50': selectedCrypto !== crypto.id,
              }"
              @click="toggleCryptoDropdownByIndex(index)"
            >
              <div class="flex gap-1 items-center min-w-0">
                <div v-if="crypto.image" class="h-5 w-5 flex-shrink-0">
                  <img
                    :src="crypto.image"
                    :alt="crypto.symbol"
                    class="object-contain"
                  />
                </div>
                <span class="text-base font-medium font-inter">{{
                  crypto.symbol
                }}</span>
              </div>
              <ArrowCrypto
                :class="{
                  'transform rotate-180': openDropdownIndex === index,
                }"
              />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="openDropdownIndex === index"
              class="absolute top-full left-0 right-0 mt-2 border border-black/20 rounded-xl p-3 bg-white shadow-lg z-10"
            >
              <div class="max-h-48 overflow-y-auto">
                <button
                  v-for="option in cryptoDropdownOptions"
                  :key="option.id"
                  class="w-full border rounded-lg py-2 px-3 flex items-center gap-2 transition-colors hover:border-orange-500 mb-2 last:mb-0"
                  :class="{
                    'border-orange-500 bg-orange-50':
                      selectedCrypto === option.id,
                    'border-black/50': selectedCrypto !== option.id,
                  }"
                  @click="selectCrypto(option.id)"
                >
                  <div v-if="option.image" class="h-4 w-4 flex-shrink-0">
                    <img
                      :src="option.image"
                      :alt="option.symbol"
                      class="object-contain"
                    />
                  </div>
                  <span class="text-sm font-medium font-inter">{{
                    option.symbol
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex max-md:hidden gap-2 text-black">
          <div
            v-for="(crypto, index) in cryptoList.slice(3, 5)"
            :key="crypto.id"
            class="flex-1 relative"
          >
            <button
              class="border w-full justify-between rounded-xl py-2.5 px-3 flex items-center gap-2 transition-colors hover:border-orange-500/50"
              :class="{
                'border-orange-500 bg-orange-50': selectedCrypto === crypto.id,
                'border-black/50': selectedCrypto !== crypto.id,
              }"
              @click="toggleCryptoDropdownByIndex(index + 3)"
            >
              <div class="flex gap-1 items-center min-w-0">
                <div v-if="crypto.image" class="h-5 w-5 flex-shrink-0">
                  <img
                    :src="crypto.image"
                    :alt="crypto.symbol"
                    class="object-contain"
                  />
                </div>
                <span class="text-base font-medium font-inter">{{
                  crypto.symbol
                }}</span>
              </div>
              <ArrowCrypto
                :class="{
                  'transform rotate-180': openDropdownIndex === index + 3,
                }"
              />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="openDropdownIndex === index + 3"
              class="absolute top-full left-0 right-0 mt-2 border border-black/20 rounded-xl p-3 bg-white shadow-lg z-10"
            >
              <div class="max-h-48 overflow-y-auto">
                <button
                  v-for="option in cryptoDropdownOptions"
                  :key="option.id"
                  class="w-full border rounded-lg py-2 px-3 flex items-center gap-2 transition-colors hover:border-orange-500 mb-2 last:mb-0"
                  :class="{
                    'border-orange-500 bg-orange-50':
                      selectedCrypto === option.id,
                    'border-black/50': selectedCrypto !== option.id,
                  }"
                  @click="selectCrypto(option.id)"
                >
                  <div v-if="option.image" class="h-4 w-4 flex-shrink-0">
                    <img
                      :src="option.image"
                      :alt="option.symbol"
                      class="object-contain"
                    />
                  </div>
                  <span class="text-sm font-medium font-inter">{{
                    option.symbol
                  }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- More Button -->
          <div class="flex-1 relative max-md:hidden">
            <button
              class="border border-black/50 w-full rounded-xl py-2.5 px-3 flex items-center justify-between gap-2 transition-colors hover:border-black/70"
              @click="toggleCryptoDropdown"
            >
              <span class="text-base font-medium font-inter">More</span>
              <ArrowCrypto
                :class="{ 'transform rotate-180': showCryptoDropdown }"
              />
            </button>

            <!-- Dropdown Menu for More -->
            <div
              v-if="showCryptoDropdown"
              class="absolute top-full left-0 right-0 mt-2 border border-black/20 rounded-xl p-3 bg-white shadow-lg z-10 max-h-48 overflow-y-auto"
            >
              <div class="flex flex-col gap-2">
                <button
                  v-for="crypto in cryptoList.slice(5)"
                  :key="crypto.id"
                  class="border rounded-lg py-2 px-3 flex items-center gap-2 transition-colors hover:border-orange-500"
                  :class="{
                    'border-orange-500 bg-orange-50':
                      selectedCrypto === crypto.id,
                    'border-black/50': selectedCrypto !== crypto.id,
                  }"
                  @click="selectCrypto(crypto.id)"
                >
                  <div v-if="crypto.image" class="h-4 w-4 flex-shrink-0">
                    <img
                      :src="crypto.image"
                      :alt="crypto.symbol"
                      class="object-contain"
                    />
                  </div>
                  <span class="text-sm font-medium font-inter">{{
                    crypto.symbol
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Crypto Icons Display -->
        <div
          class="flex items-center text-black justify-center max-md:pt-4 gap-0"
        >
          <div class="h-7 w-auto">
            <img :src="OtherCryptos" class="object-contain" />
          </div>
          <span class="text-base font-medium font-inter ml-3"
            >+ Other Cryptos</span
          >
        </div>
      </div>

      <!-- Price Info -->
      <div
        class="border text-black border-black/50 rounded-xl py-2 sm:py-3 px-3 sm:px-5 flex flex-row items-center justify-between gap-2 sm:gap-0 mb-4"
      >
        <div class="flex items-center gap-2">
          <span class="max-md:text-[10px] text-base font-medium">
            Presale Price =
          </span>
          <span
            class="max-md:text-[10px] text-base font-medium text-orange-500"
          >
            {{ formatPrice(presalePrice) }}
          </span>
        </div>
        <div class="block w-px h-8 bg-black"></div>
        <div class="flex items-center gap-2">
          <span class="text-[10px] sm:text-base font-medium">
            Launch Price =
          </span>
          <span class="text-[10px] sm:text-base font-medium text-orange-500">
            {{ formatPrice(launchPrice) }}
          </span>
        </div>
      </div>

      <!-- Pay/Receive Section -->
      <div
        class="grid relative grid-cols-2 text-black gap-4 mb-4 max-md:gap-2 max-md:grid-cols-1"
      >
        <div>
          <p
            class="text-base max-md:text-sm font-semibold font-inter mb-2 max-md:mb-0"
          >
            You Pay
          </p>
          <div
            class="border relative border-black/50 rounded-xl py-3 px-4 flex items-center justify-between"
          >
            <div
              class="absolute top-1/2 right-0 translate-x-[85%] -translate-y-1/2 text-white w-6 aspect-square max-md:h-10 max-md:w-10  bg-orange-500 rounded-full flex justify-center items-center font-bold max-md:right-1/2 max-md:translate-x-1/2 max-md:translate-y-[40%] max-md:bottom-0"
            >
              =
            </div>
            <input
              v-model.number="payAmount"
              type="number"
              class="text-base font-medium font-inter bg-transparent outline-none w-full"
              placeholder="0"
              @input="calculateReceiveAmount"
            />
            <div class="flex pr-3 items-center gap-2">
              <div class="h-5 w-auto flex-shrink-0">
                <img
                  :src="getSelectedCryptoImage"
                  :alt="selectedCryptoSymbol"
                  class="object-contain"
                />
              </div>
              <span class="text-sm font-medium font-inter whitespace-nowrap">
                {{ selectedCryptoSymbol }}
              </span>
            </div>
          </div>
        </div>
        <div>
          <p
            class="text-base max-md:text-sm font-semibold font-inter mb-2 max-md:mb-0"
          >
            You Receive
          </p>
          <div
            class="border border-black/50 rounded-xl py-3 px-4 flex items-center justify-between"
          >
            <input
              v-model.number="receiveAmount"
              type="number"
              class="text-base font-medium font-inter bg-transparent outline-none w-full"
              placeholder="0"
              disabled
            />
            <div class="flex pr-3 items-center gap-2 ml-2">
              <div class="h-5 w-auto flex-shrink-0">
                <img :src="IpoCryptoIcon" alt="IPO" class="object-contain" />
              </div>
              <span class="text-sm font-medium font-inter whitespace-nowrap"
                >IPO</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <CustomButton
          :text="`Buy With ${selectedCryptoSymbol}`"
          :disabled="!isFormValid"
          @click="handlePurchase"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import CountdownTimer from "./CountdownTimer.vue";
import ArrowCrypto from "@/assets/icons/ArowCrypto.vue";
import CustomButton from "@/ui/CustomButton.vue";

// Images
import CryptoIcon1 from "@/assets/img/BuyNow/CryptoIcon1.png";
import CryptoIcon2 from "@/assets/img/BuyNow/CryptoIcon2.png";
import CryptoIcon3 from "@/assets/img/BuyNow/CryptoIcon3.png";
import CryptoIcon4 from "@/assets/img/BuyNow/CryptoIcon4.png";
import CryptoIcon5 from "@/assets/img/BuyNow/CryptoIcon5.png";
import IpoCryptoIcon from "@/assets/img/BuyNow/IpoCryptoIcon.png";
import OtherCryptos from "@/assets/img/BuyNow/OtherCryptos.png";

// ============= CONSTANTS =============
const TOTAL_RAISE_GOAL = 35_000_000;
const presalePrice = 0.0029;
const launchPrice = 0.005;

const paymentMethods = [
  { id: "card", label: "via card", sublabel: "Mastercard...." },
  { id: "crypto", label: "via crypto", sublabel: null },
];

// ============= MOCK DROPDOWN DATA =============
const cryptoDropdownOptions = ref([
  { id: "ETH", symbol: "ETH", image: CryptoIcon1, rate: 0.042 },
  { id: "BNB", symbol: "BNB", image: CryptoIcon2, rate: 0.156 },
  { id: "USDT", symbol: "USDT", image: CryptoIcon3, rate: 1.0 },
  { id: "BTC", symbol: "BTC", image: CryptoIcon4, rate: 0.00006 },
  { id: "SOL", symbol: "SOL", image: CryptoIcon5, rate: 0.23 },
  { id: "ADA", symbol: "ADA", image: null, rate: 0.5 },
  { id: "XRP", symbol: "XRP", image: null, rate: 2.5 },
  { id: "DOGE", symbol: "DOGE", image: null, rate: 8.0 },
  { id: "AVAX", symbol: "AVAX", image: null, rate: 0.08 },
  { id: "ATOM", symbol: "ATOM", image: null, rate: 0.18 },
  { id: "LINK", symbol: "LINK", image: null, rate: 0.15 },
  { id: "MATIC", symbol: "MATIC", image: null, rate: 1.25 },
  { id: "ARBITRUM", symbol: "ARB", image: null, rate: 5.5 },
  { id: "OPTIMISM", symbol: "OP", image: null, rate: 2.8 },
]);

// ============= REACTIVE STATE =============
const paymentMethod = ref("crypto");
const selectedCrypto = ref("BTC");
const showCryptoDropdown = ref(false);
const openDropdownIndex = ref(null);
const usdRaised = ref(18_434_064);
const payAmount = ref(1);
const receiveAmount = ref(0);

const isMobile = window.innerWidth < 768;

// ============= CRYPTO DATA =============
const cryptoList = ref([
  { id: "ETH", symbol: "ETH", image: CryptoIcon1, rate: 0.042 },
  { id: "BNB", symbol: "BNB", image: CryptoIcon2, rate: 0.156 },
  { id: "USDT", symbol: "USDT", image: CryptoIcon3, rate: 1.0 },
  { id: "BTC", symbol: "BTC", image: CryptoIcon4, rate: 0.00006 },
  { id: "SOL", symbol: "SOL", image: CryptoIcon5, rate: 0.23 },
  { id: "ADA", symbol: "ADA", image: null, rate: 0.5 },
  { id: "XRP", symbol: "XRP", image: null, rate: 2.5 },
  { id: "DOGE", symbol: "DOGE", image: null, rate: 8.0 },
  { id: "LINK", symbol: "LINK", image: null, rate: 0.15 },
  { id: "MATIC", symbol: "MATIC", image: null, rate: 1.25 },
]);

// ============= COMPUTED PROPERTIES =============
const progressPercentage = computed(() => {
  return Math.round((usdRaised.value / TOTAL_RAISE_GOAL) * 100);
});

const selectedCryptoData = computed(() => {
  return (
    cryptoDropdownOptions.value.find((c) => c.id === selectedCrypto.value) ||
    cryptoDropdownOptions.value[3]
  );
});

const selectedCryptoSymbol = computed(() => selectedCryptoData.value.symbol);

const getSelectedCryptoImage = computed(
  () => selectedCryptoData.value.image || CryptoIcon4
);

const isFormValid = computed(() => {
  return payAmount.value > 0 && receiveAmount.value > 0;
});

// ============= METHODS =============
const selectPaymentMethod = (method) => {
  paymentMethod.value = method;
};

const selectCrypto = (cryptoId) => {
  selectedCrypto.value = cryptoId;
  openDropdownIndex.value = null;
  showCryptoDropdown.value = false;
  calculateReceiveAmount();
};

const toggleCryptoDropdown = () => {
  showCryptoDropdown.value = !showCryptoDropdown.value;
  openDropdownIndex.value = null;
};

const toggleCryptoDropdownByIndex = (index) => {
  openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
  showCryptoDropdown.value = false;
};

const calculateReceiveAmount = () => {
  const cryptoRate = selectedCryptoData.value.rate;
  const tokensPerCrypto = payAmount.value / presalePrice / cryptoRate;
  receiveAmount.value = Math.round(tokensPerCrypto * 1000000) / 1000000;
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatPrice = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(value);
};

const handlePurchase = () => {
  if (!isFormValid.value) return;

  console.log({
    paymentMethod: paymentMethod.value,
    crypto: selectedCryptoSymbol.value,
    payAmount: payAmount.value,
    receiveAmount: receiveAmount.value,
  });

  alert(
    `購買: ${payAmount.value} ${selectedCryptoSymbol.value} = ${receiveAmount.value} IPO`
  );
};

// ============= WATCHERS =============
watch(selectedCrypto, () => {
  calculateReceiveAmount();
});

// ============= INITIALIZATION =============
calculateReceiveAmount();

const progressBar = ref(null);

let isDragging = false;

const updateProgress = (event) => {
  if (!isDragging) return;
  const rect = progressBar.value.getBoundingClientRect();
  let x = event.clientX - rect.left;
  x = Math.max(0, Math.min(rect.width, x));
  progressPercentage.value = Math.round((x / rect.width) * 100);
  usdRaised.value = Math.round(
    (progressPercentage.value / 100) * TOTAL_RAISE_GOAL
  );
};

const startDrag = (event) => {
  isDragging = true;
  updateProgress(event);
  window.addEventListener("mousemove", updateProgress);
  window.addEventListener("mouseup", stopDrag);
};

const stopDrag = () => {
  isDragging = false;
  window.removeEventListener("mousemove", updateProgress);
  window.removeEventListener("mouseup", stopDrag);
};

watch(usdRaised, (val) => {
  const input = document.querySelector('input[type="range"]');
  const percent = Math.round((val / TOTAL_RAISE_GOAL) * 100);
  input.style.setProperty("--percent", percent + "%");
});
</script>

<style scoped>
input[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
}

/* Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid #f97316;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid #f97316;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

/* Track */
input[type="range"]::-webkit-slider-runnable-track {
  height: 20px;
  border-radius: 9999px;
  background: linear-gradient(
    to right,
    #f97316 0%,
    #f97316 var(--percent),
    #0000001a var(--percent),
    #0000001a 100%
  );
}

input[type="range"]::-moz-range-track {
  height: 20px;
  border-radius: 9999px;
  background: #0000001a;
}

/* Custom property for gradient */
.range-orange {
  --percent: 53%;
}
</style>
