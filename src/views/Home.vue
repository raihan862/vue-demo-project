<template>
  <div class="home-container">
    <div class="aa">
      <div class="home" v-for="product of products" :key="product.key">
        <Product :product="product" />
      </div>
    </div>
    <div class="cart">
      <Cart />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import fakeData from "../fakeData/index";
import Product from "../components/HomeComponent/Product";
import Cart from "../components/HomeComponent/Cart";
export default {
  name: "Home",
  components: {
    Product,
    Cart,
  },
  setup() {
    const products = ref([]);
    const getData = async () => {
      const filterData = await fakeData.slice(0, 20);
      products.value = filterData;
    };
    onMounted(getData);

    return { products };
  },
};
</script>
<style>
.home-container {
  display: flex;
  width: 100%;
}
.aa {
  width: 100%;
}
.home {
  padding: 15px 30px;
}
.cart {
  width: 40%;
  border-left: 1px solid #999;
  margin-left: -29px;
}
</style>
