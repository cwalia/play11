import Vue from "vue";
import VueRouter, {RouterOptions} from 'vue-router'

const Login = () => import("@/components/login/Login.vue");
const Register = () => import("@/components/login/Register.vue");
const Dashboard = () => import("@/components/app/Dashboard.vue");

Vue.use(VueRouter);

export const routerOptions: RouterOptions = {
  routes: [
    {
      path: '/',
      component: Login,
    },{
      path: '/register',
      component: Register,
    },{
      path: '/app',
      component: Dashboard,
    }
  ],
  mode: 'history',
}

export default new VueRouter(routerOptions)