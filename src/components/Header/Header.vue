<template>
  <div>
    <div class="logoContainer">
      <img src="../../assets/logo.png" alt=" logo.png" width="250" />
    </div>
    <div class="stickyBar">
      <nav class="nabbar">
        <div class="link">
          <div>
            <img
              src="https://shopping-cartt.firebaseapp.com/static/media/favicon.2ac21cab.ico"
              alt=" logo.png"
              width="50"
            />
          </div>
          <div>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/cart-review">Cart Review</router-link>
              </li>
              <li>
                <router-link to="/inventory">Inventory</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="right-side">
            <p>{{ user.name }}</p>

            <router-link to="/login" v-if="!user.name" class="noStyle"
              >Login</router-link
            >
            <router-link to="/" class="noStyle" v-else @click="handleLogout"
              >LogOut</router-link
            >
          </div>
        </div>
      </nav>
      <div class="serachBar">
        <input type="text" id="searchInput" />
        <button class="btnStyle">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Header",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.users.user);
    const handleLogout = () => {
      store.dispatch("setUser", { name: "", email: "", token: "" });
      localStorage.setItem("token", "");
    };
    return { user, handleLogout };
  },
};
</script>

<style>
.serachBar {
  padding: 15px;
  background-color: #444;
  width: 100%;
}

#searchInput {
  width: 40%;
  padding: 9px;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
}
.noStyle {
  background: transparent;
  border: none;
  color: crimson;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
}
.noStyle:hover {
  color: brown;
}
.right-side {
  display: flex;
  align-items: center;
}
.right-side p {
  padding-right: 20px;
}
.nabbar {
  display: flex;
  background-color: #000;
  color: white;
  padding: 20px 35px;
  justify-content: space-between;
  align-items: center;
}
.link {
  display: flex;
}
.nabbar ul li {
  list-style: none;
}
.btnStyle {
  background-color: crimson;
  color: white;
  outline: none;
  border: none;
  padding: 7px 25px;
  border-radius: 12px;
  font-size: 16px;
}
.nabbar ul {
  display: flex;
}
.nabbar ul li a {
  color: white;
  text-decoration: none;
  padding: 7px 20px;
  font-weight: 500;
}
.router-link-exact-active {
  color: crimson !important;
  font-weight: 600 !important;
}
.nabbar ul li a:hover {
  color: goldenrod;
}
</style>
