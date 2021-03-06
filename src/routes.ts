import Vue from "vue";
import VueRouter, {RouterOptions} from 'vue-router'

const Login = () => import("@/components/login/Login.vue");
const Register = () => import("@/components/login/Register.vue");
const Dashboard = () => import("@/components/app/Dashboard.vue");
const League = () => import("@/components/app/League.vue");
const CreateTeam = () => import("@/components/common/CreateTeam.vue");

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
    },{
      path: '/app/league/:id',
      component: League,
    },{
      path: '/app/create-team/:id',
      component: CreateTeam,
    },
  ],
  mode: 'history',
}

export default new VueRouter(routerOptions)