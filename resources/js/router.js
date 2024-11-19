import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./Pages/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("./Pages/About.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});