<template>
  <div class="home-container">
    <div class="aa">
      <div class="home" v-for="product of products" :key="product.key"></div>
    </div>
    <div class="cart">
      <Cart />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import Cart from "../components/HomeComponent/Cart";
export default {
  name: "CartReview",
  components: {
    Cart,
  },
  setup() {
    const cartData = inject("cartData");
    console.log(cartData.value[0]);
    return { cartData };
  },
};
</script>

<style></style>
