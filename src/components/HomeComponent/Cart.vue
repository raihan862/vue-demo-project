<template>
  <div class="cart-container">
    <div class="top">
      <h2>Order Review</h2>
      <h4>Item Order</h4>
    </div>
    <div class="cart-body">
      <div class="item">
        <p>Type</p>
        <p>Price (tk)</p>
      </div>
      <div class="item">
        <p>Items</p>
        <p>{{ itemPrice }}</p>
      </div>
      <div class="item">
        <p>Shipping</p>
        <p>{{ shipping }}</p>
      </div>
      <div class="item">
        <p>Tax</p>
        <p>{{ tax }}</p>
      </div>
      <div class="item">
        <p>Total</p>
        <p>{{ total }}</p>
      </div>
    </div>

    <div v-if="from == 'home'" class="bottom">
      <router-link to="/cart-review" class="link-button"
        >Review Cart</router-link
      >
    </div>
    <div v-if="from == 'review'" class="bottom">
      <router-link to="/place-order" class="link-button"
        >Place Order</router-link
      >
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
// import { getCart } from "../../Composible/StorageHandeler";
export default {
  name: "Cart",
  props: ["from"],
  setup() {
    const cartData = inject("cartData");
    let itemPrice = computed(() => {
      return cartData.value.reduce((total, curr) => {
        total += curr.price * curr.quantity;
        return Math.round(total);
      }, 0);
    });
    let shipping = computed(() => {
      return cartData.value.reduce((total, curr) => {
        total += curr.shipping;
        return Math.round(total);
      }, 0);
    });

    const tax = computed(() => ((itemPrice.value + shipping.value) * 5) / 100);
    const total = computed(() => itemPrice.value + shipping.value + tax.value);

    return { cartData, itemPrice, shipping, tax, total };
  },
};
</script>

<style scope>
.cart-body {
  text-align: center;
  width: 100%;
}
.bottom {
  padding-top: 10px;
}
.item {
  width: 60%;
  margin: auto;
  display: flex;
  padding: 3px;
}

.item p {
  margin: 0px;
  padding: 5px;

  flex: 0.5;
}
.item:nth-child(1),
.item:last-child {
  font-weight: bold;
  padding: 15px 0px;
}
.link-button {
  text-decoration: none;
  background: linear-gradient(rgba(231, 218, 39), rgb(126, 118, 5));
  color: aliceblue !important;
  margin-top: 15px;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  outline: none;
}
h4 {
  margin: 0px;
}
.item p:nth-child(1) {
  text-align: left;
}
</style>
