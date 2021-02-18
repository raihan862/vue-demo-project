<template>
  <div class="thanks">
    <h2>Thank You For Shopping With Us</h2>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const cartData = inject("cartData");
    cartData.value = [];
    sessionStorage.setItem("cart", []);
  },
};
</script>

<style>
.thanks {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
