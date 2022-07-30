/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayView from "../views/PlayView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [{
    path: "/",
    name: "Login",
    component: LoginView,
},
{
    path: "/home",
    name: "home",
    component: HomeView,
},
{
    path: "/play/:id",
    name: "Play Movie",
    component: PlayView,
},
// {
//   path: "/play/:id",
//   name: "User",
//   component: () => import("../views/PlayView.vue"),
//   props: true,
// },
{
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
        import("../views/NotFound.vue"),
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;