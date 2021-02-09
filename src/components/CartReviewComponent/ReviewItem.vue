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
          <p>Quantity: {{ product.quantity }}</p>
          <div>
            <Button><font-awesome-icon icon=""/></Button>
          </div>
          <!-- <p v-show="isInCart" class="fade">All Ready in Cart</p> -->
          <button @click="checkCart(product)">Remove Item</button>
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
export default {
  name: "ReviewItem",
};
</script>

<style></style>
