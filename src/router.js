import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Plant from "./components/Plant.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/home", home: Home},
        {path: "/about", about: About},
        {path: "/contact", contact: Contact},
        {path: "/plants", component: Plant},
]

})


export default router
