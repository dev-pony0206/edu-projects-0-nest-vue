import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    meta: {
      title: "Product-List",
    },
    path: "/list",
    name: "list",
    component: () => import("@/components/views/ProductList.vue"),
  },
  {
    meta: {
      title: "Sing Up",
    },
    path: "/signup",
    name: "signup",
    component: () => import("@/components/views/UserSignup.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/",
    name: "login",
    component: () => import("@/components/views/UserLogin.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/components/views/UserProfile.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/components/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
