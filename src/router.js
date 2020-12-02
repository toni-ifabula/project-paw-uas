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
        {
            path: "/EmailActivation",
            name: "EmailActivation",
            meta: {title: 'EmailActivation'},
            component: importComponent('EmailActivation'),
        },
        {
            path: "/ContactUs",
            name: "ContactUs",
            meta: {title: 'ContactUs'},
            component: importComponent('ContactUs'),
        },
        {
            path: "/ProfileUpdate",
            name: "ProfileUpdate",
            meta: {title: 'ProfileUpdate'},
            component: importComponent('ProfileUpdate'),
        },
        {
            path: "/ProfileUser",
            name: "ProfileUser",
            meta: {title: 'ProfileUser'},
            component: importComponent('ProfileUser'),
        },
        {
            path: "/ChangePicture",
            name: "ChangePicture",
            meta: {title: 'ChangePicture'},
            component: importComponent('ChangePicture'),
        },
        {
            path: "/login",
            name: "login",
            meta: {title: 'Login'},
            component: importComponent('Login'),
        },
    ]
});

//Mengeset judul
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

export default router;