import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import CartReview from "../views/CartReview";
import Home from "../views/Home";
import Inventory from "../views/Inventory";
import Login from "../views/Login/Login";
import PlaceOrder from "../views/PlaceOrder";
const routes = [
  {
    path: "/",
    redirects: "/login",
    name: "Home",

    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    params: true,
  },
  {
    path: "/place-order",
    name: "PlaceOrder",
    component: PlaceOrder,
    meta: {
      requiresAuth: true,
    },
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
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
//
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth == true && !store.getters.isAuthenticated) {
    next({
      path: "/login",
      query: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
});
export default router;
