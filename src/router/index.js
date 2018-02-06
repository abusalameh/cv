import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import Frontend from "@/components/Frontend";
import Backend from "@/components/Backend";

Vue.use(Router);

export default new Router({
    
    routes: [
        {
            path: "/",
            name: "welcome",
            component: Welcome
        },
        {
            path: "/frontend",
            name: "frontend",
            component: Frontend
        },
        {
            path: "/backend",
            name: "backend",
            component: Backend
        },
        { path: "*", redirect: "/" }
    ]
});
