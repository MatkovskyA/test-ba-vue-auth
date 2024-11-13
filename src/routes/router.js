import { createRouter, createWebHistory } from "vue-router";
import AccountPage from "../components/AccountPage.vue";
import LoginPage from "../components/LoginPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
    path: '/dashboard',
    component: AccountPage
  }, 
  {
    path: '/',
    component: LoginPage
  }
  ]
})
