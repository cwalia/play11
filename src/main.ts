import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/routes";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";
// @ts-ignore
import OtpInput from "@bachdgvn/vue-otp-input";

// @ts-ignore
import VueSwal from 'vue-swal'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
// @ts-ignore
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(PerfectScrollbar)
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSwal)
Vue.component("v-otp-input", OtpInput);

// const storedEmail = sessionStorage.getItem('userSession')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
