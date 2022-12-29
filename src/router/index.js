import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import thank from "@/pages/isSend.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thank-you",
    name: "thank",
    component: thank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;