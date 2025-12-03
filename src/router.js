import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "@/pages/Home.vue";
import News from "./pages/News.vue";
import Tokenomics from "./pages/Tokenomics.vue";
import Wallet from "./pages/Wallet.vue";
import HowToBuy from "./pages/HowToBuy.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/news", name: "News", component: News },
  { path: "/tokenomics", name: "Tokenomics", component: Tokenomics },
  { path: "/wallet", name: "Wallet", component: Wallet },
  { path: "/how-to-buy", name: "HowToBuy", component: HowToBuy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
