const state = {
  user: {
    name: "",
    email: "",
    token: "",
  },
};

const getters = {
  getUser: (state) => state.user,
  isAuthenticated: (state) => {
    if (state.user.token === localStorage.getItem("token")) {
      if (state.user.name) {
        return true;
      }
    }
    return false;
  },
};
const actions = {
  setUser: ({ commit }, data) => commit("addUser", data),
};
const mutations = {
  addUser: (state, { name, email, token }) => {
    state.user.name = name;
    state.user.email = email;
    state.user.token = token;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
