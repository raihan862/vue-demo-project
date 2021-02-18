<template>
  <div class="main">
    <Header />
    <router-view> </router-view>
  </div>
</template>
<script>
import Header from "./components/Header/Header";
import { onMounted, provide, ref } from "vue";
import { getCart } from "./Composible/StorageHandeler";
export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const cartData = ref([]);

    const getData = () => {
      cartData.value = getCart();
    };
    onMounted(getData);
    provide("cartData", cartData);
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
