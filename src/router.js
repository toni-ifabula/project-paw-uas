import Vue from 'vue'
import VueRouter from 'vue-router'
// import AboutUs from "@/components/AboutUs"

Vue.use(VueRouter)

function importComponent(path) {
    return () => import(`./components/${path}.vue`)
}

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/AboutUs",
            name: "AboutUs",
            meta: {title: 'AboutUs'},
            component: importComponent('AboutUs'),
        },
    ]
});

export default router;