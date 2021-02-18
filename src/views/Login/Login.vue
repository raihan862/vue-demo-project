<template>
  <div class="login">
    <form @submit="onSubmit" @reset="onReset" v-if="show" autocomplete="off">
      <h2>Login {{ $route.params.nextUrl }}</h2>
      <div class="form-body">
        <input type="text" v-model="formData.name" placeholder="User Name" />
        <input
          type="email"
          v-model="formData.email"
          placeholder="Enter Email"
          autocomplete="off"
          required
        />
        <input
          type="password"
          v-model="formData.password"
          placeholder="Password"
          autocomplete="off"
          required
        />
      </div>

      <div class="form-button">
        <input type="submit" value="Submit" class="halfBtn" />
        <input type="reset" value="Reset" class="halfBtn" />
      </div>

      <button @click="googleLogin" id="google-login">
        <i class="fa fa-google" id="googleIcon"></i>Login With Gmail
      </button>
    </form>
  </div>
</template>

<script>
import { firebase } from "@firebase/app";
import "firebase/auth";
import firebaseConfig from "./Authentication";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
// var CryptoJS = require("crypto-js");
firebase.initializeApp(firebaseConfig);
export default {
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    // console.log("route", route.params);
    const formData = ref({
      name: "",
      email: "",
      password: "",
    });
    let show = ref(true);
    const onSubmit = (e) => {
      e.preventDefault();
    };
    const onReset = (e) => {
      e.preventDefault();
      formData.value = {
        name: "",
        email: "",
        password: "",
      };
    };
    var provider = new firebase.auth.GoogleAuthProvider();
    const googleLogin = () => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var name = result.user.displayName;
          var email = result.user.email;

          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(function(idToken) {
              localStorage.setItem("token", idToken);
              store.dispatch("setUser", { name, email, token: idToken });
              const a = route.query.nextUrl || "/";
              console.log(a);
              router.push({ path: a });
            })
            .catch(function(error) {
              // Handle error
              console.log(error);
            });
        })
        .catch((error) => {
          var errorMessage = error.message;

          console.log(errorMessage);

          // ...
        });
    };
    return { formData, onReset, onSubmit, show, googleLogin };
  },
};
</script>

<style scoped>
.login form {
  width: 60%;
  margin: auto;
  border: none;
  margin-top: 20px;
  padding: 50px 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1),
    -2px -2px 10px rgba(222, 222, 255, 1);
}

.form-body input,
#google-login {
  display: block;
  padding: 15px 20px;
  border: none;
  border-radius: 15px;
  width: 70%;
  margin: auto;
  background-color: white;
  margin-top: 25px;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1), -1px -1px 5px rgba(0, 0, 0, 0.1);
}

#googleIcon {
  padding-right: 20px;
  color: red;
  font-size: 24px;
  text-align: center;
}
.login form input:focus {
  outline: none;
}
.form-button {
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: auto;
}
.halfBtn {
  width: 40%;
  margin-top: 15px;
  border: none;
  padding: 15px;
  border-radius: 25px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1), -1px -1px 5px rgba(0, 0, 0, 0.1);
}
</style>
