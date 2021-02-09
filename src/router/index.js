import { createRouter, createWebHistory } from "vue-router";
import CartReview from "../views/CartReview";
import Home from "../views/Home";
import Inventory from "../views/Inventory";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart-review",
    name: "CartReview",
    component: CartReview,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
