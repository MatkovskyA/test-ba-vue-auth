import { createRouter, createWebHashHistory } from "vue-router";
import AccountPage from "../components/AccountPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import LoginPage from "../components/LoginPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
    path: '/dashboard',
    component: AccountPage
  },
  //  {
  //   path: '/',
  //   component: HelloWorld
  // },
   {
    path: '/',
    component: LoginPage
  }
  ]
})
