import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/Category.vue"),
  },
  {
    path: "/detail",
