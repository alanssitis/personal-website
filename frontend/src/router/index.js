import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import Admin from "@/views/Admin.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
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
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;