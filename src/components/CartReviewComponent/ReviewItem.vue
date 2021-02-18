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

          <div class="quantity-button">
            <div>
              <p :style="style2">Quantity :</p>
            </div>
            <div class="quantity">
              <Button @click="handleQuantity($event, product)" id="minus"
                ><i class="fa fa-minus-circle" id="minus"></i>
              </Button>
              <p :style="style">
                <b>{{ product.quantity }}</b>
              </p>
              <Button @click="handleQuantity($event, product)" id="plus"
                ><i class="fa fa-plus-circle" id="plus"></i>
              </Button>
            </div>
          </div>
          <!-- <p v-show="isInCart" class="fade">All Ready in Cart</p> -->
          <button @click="removeItem(product)" class="removeItem">
            Remove Item
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
import { inject } from "vue";
// import { getCart } from "../../Composible/StorageHandeler";
export default {
  name: "ReviewItem",
  props: ["product"],
  data() {
    return {
      style: {
        padding: "0px 10px",
      },
      style2: {
        paddingRight: " 10px",
      },
    };
  },
  setup() {
    // let cartData = inject("cartData");
    let removeItem = inject("removeItem");
    let handleQuantity = inject("handleQuantity");

    return { removeItem, handleQuantity };
  },
};
</script>

<style>
.quantity {
  display: flex;
}
.quantity-button {
  background-color: whitesmoke;
  padding: 0px 5px;
  display: flex;
}
.quantity-button button {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 20px;
}

.removeItem {
  background-color: brown;
  color: aliceblue;
  margin-top: 15px;
  border: none;
  padding: 8px 15px;
  border-radius: 15px;
}
</style>
