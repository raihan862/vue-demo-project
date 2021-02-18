import { createStore } from "vuex";
import users from "./modules/user";

const store = createStore({
  modules: {
    users,
  },
});
export default store;
