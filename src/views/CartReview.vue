<template>
  <div v-if="cartData.length != 0">
    <div class="home-container">
      <div class="items">
        <div class="home" v-for="product of cartData" :key="product.key">
          <ReviewItem :product="product" />
        </div>
      </div>
      <div class="cart">
        <Cart from="review" />
      </div>
    </div>
  </div>
  <div v-else>
    <h2 class="no-data">No Item In Cart</h2>
  </div>
</template>

<script>
import { inject, provide } from "vue";
import ReviewItem from "../components/CartReviewComponent/ReviewItem";
import Cart from "../components/HomeComponent/Cart";
import { removeFormCart } from "../Composible/StorageHandeler";
export default {
  name: "CartReview",
  components: {
    Cart,
    ReviewItem,
  },
  setup() {
    const cartData = inject("cartData");

    const removeItem = (data) => {
      const filterData = cartData.value.filter((dt) => dt.key !== data.key);

      removeFormCart(filterData);
      cartData.value = filterData;
    };
    const handleQuantity = (event, data) => {
      const index = cartData.value.findIndex((dt) => dt.key == data.key);
      if (event.target.id == "plus") {
        cartData.value[index].quantity += 1;
      } else {
        if (cartData.value[index].quantity > 1) {
          cartData.value[index].quantity -= 1;
        }
      }
    };
    provide("removeItem", removeItem);
    provide("handleQuantity", handleQuantity);
    return { cartData };
  },
};
</script>

<style>
.no-data {
  font-weight: bold;
  display: block;
}
</style>
