import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Editor from "../views/Editor.vue"
import TemplateDetail from "../views/TemplateDetail.vue"
import Index from "../views/Index.vue"

const routes = [
  {
    name: "Index",
    path: "/",
    component: Index,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/template/:id", name: "template", component: TemplateDetail },
    ],
  },
  {
    name: "editor",
    path: "/editor",
    component: Editor,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
