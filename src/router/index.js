import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;