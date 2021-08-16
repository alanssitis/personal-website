import Home from "@/views/Home/Home.vue";
import Projects from "@/views/Projects/Projects.vue";
import Blog from "@/views/Blog/Blog.vue";
import Contact from "@/views/Contact/Contact.vue";
import Admin from "@/views/Admin/Admin.vue";
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