<template>
  <div class="home-container">
    <div class="items">
      <div class="home" v-for="product of products" :key="product.key">
        <Product :product="product" />
      </div>
    </div>
    <div class="cart">
      <Cart from="home" />
    </div>
  </div>
</template>

<script>
import { inject, onMounted, provide, ref } from "vue";
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
    const fakeProducts = ref([]);
    const searchText = inject("searchText");
    const getData = async () => {
      const filterData = await fakeData.slice(0, 20);
      products.value = filterData;
    };
    onMounted(getData);
    const updateProducts = () => {
      console.log("come");
      fakeProducts.value = products.value.filter((item) =>
        item.name.toUpperCase().match(searchText.value.toUpperCase)
      );
    };

    provide("updateProducts", updateProducts);
    return { products };
  },
};
</script>
<style>
.home-container {
  display: flex;
  width: 100%;
  position: relative;
}
.items {
  width: 100%;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
  padding-bottom: 150px;
}
.items::-webkit-scrollbar {
  display: none;
}

.items {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.home {
  padding: 15px 30px;
}
.cart {
  width: 40%;
  border-left: 2px solid rgba(155, 91, 91, 0.07);
  margin-left: -29px;
}
</style>
