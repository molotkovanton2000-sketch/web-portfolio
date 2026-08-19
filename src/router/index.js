import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/projects",
    name: "Project List",
    component: () => import("../views/ProjectsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/sandbox",
    component: () => import("../views/SandBox/SandBoxView.vue"),
    children: [
      {
        path: "",
        name: "sandbox-home",
        component: () => import("../components/sandbox/VCounter.vue"),
      },
      {
        path: "todolist",
        name: "todo-list",
        component: () => import("../components/sandbox/VTodoList.vue"),
      },
      {
        path: "posts",
        name: "sandbox-posts",
        component: () => import("../views/SandBox/PostsListView.vue"),
      },
      {
        path: "posts/:id",
        name: "post-detail",
        component: () => import("../views/SandBox/PostDetailView.vue"),
      },
      {
        path: "users",
        name: "sandbox-users",
        component: () => import("../views/SandBox/UsersListView.vue"),
      },
      {
        path: "users/:id",
        name: "user-detail",
        component: () => import("../views/SandBox/UserDetailView.vue"),
      },
      {
        path: "add-post",
        name: "sandbox-add-post",
        component: () => import("../views/SandBox/AddPostView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
