<template>
  <div class="item-container">
    <div class="img-div">
      <img :src="product.img" alt="img.png" />
    </div>
    <div class="item-details">
      <h4>{{ product.name }}</h4>
      <div class="center">
        <div class="left">
          <p>
            By : <b> {{ product.seller }}</b>
          </p>
          <p>Price: {{ product.price }}</p>
          <p>Available item: {{ product.stock }}</p>
          <p v-show="isInCart" class="fade">All Ready in Cart</p>
          <button @click="checkCart(product)" class="btnStyle2">
            <i class="fa fa-cart-plus " id="icon"></i> Add To Card
          </button>
        </div>
        <div class="right">
          <p>Rating :{{ product.star }}</p>
          <h4>Features</h4>
          <ul v-for="feature of product.features" :key="feature">
            <li>{{ feature.description }} {{ feature.value }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import {
  addToCart,
  getCart,
  CheckInCart,
} from "../../Composible/StorageHandeler";
import { inject, ref } from "vue";
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      addToCart,
      getCart,
    };
  },
  setup() {
    // const avaiable = ref(true);

    const cartData = inject("cartData");
    let isInCart = ref(false);

    const checkCart = (item) => {
      isInCart.value = CheckInCart(item.key);
      const newItem = { ...item, quantity: 1 };
      if (!isInCart.value) {
        cartData.value.push(newItem);
        addToCart(newItem);
      }
      setTimeout(() => {
        isInCart.value = false;
      }, 1000);
    };

    return { isInCart, checkCart };
  },
};
</script>

<style>
.item-container {
  display: flex;

  padding: 10px;
  justify-content: space-between;
  text-align: left;
  border-bottom: 2px solid rgba(5, 5, 5, 0.07);
}
.fade {
  transition: 0.3s;
  color: red;
}
#icon {
  font-size: 20px;
  color: white;
  padding: 5px;
}
.img-div {
  flex: 0.4;
  text-align: right;
  padding-right: 25px;
}
.img-div img {
  width: 80%;
  padding: 20px;
}

.item-details {
  padding: 10px;
  padding-left: 15px;
  flex: 0.6;
}
.center {
  display: flex;
  text-align: left;
}
.left,
.right {
  flex: 0.5;
}
.right ul li {
  color: gray;
  font-size: 12px;
}
.btnStyle2 {
  background: linear-gradient(rgba(231, 218, 39), rgb(126, 118, 5));
  color: aliceblue;
  margin-top: 15px;
  border: none;
  padding: 3px 10px;
  border-radius: 10px;
  outline: none;
}
button {
  cursor: pointer;
}
button:focus {
  outline: none !important;
}
</style>
