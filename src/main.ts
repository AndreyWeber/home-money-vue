import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { AgGridVue } from 'ag-grid-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Import AG Grid theme CSS
import 'ag-grid-community/dist/styles/ag-grid.css';
// You can choose a different theme
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component("AgGridVue", AgGridVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
