import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faHouse, fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, faHouse);

const app = createApp(App);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
