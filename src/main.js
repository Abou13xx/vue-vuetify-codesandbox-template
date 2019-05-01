import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Info from "./components/Info";
import Menu from "./components/Menu";


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { path: "/", component: Home },
      { path: "/info", component: Info },
      { path: "/menu", component: Menu }
    ]
  })
}).$mount("#app");

