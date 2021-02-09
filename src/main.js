import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
library.add(faSpinner);
library.add(faPlus);
library.add(faMinus);
Vue.component("font-awesome-icon", FontAwesomeIcon);
createApp(App)
  .use(router)
  .mount("#app");
