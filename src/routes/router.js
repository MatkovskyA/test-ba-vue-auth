import { createRouter, createWebHistory } from "vue-router";
import AccountPage from "../components/AccountPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import LoginPage from "../components/LoginPage.vue";

export default createRouter({
  history: createWebHistory(),
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
