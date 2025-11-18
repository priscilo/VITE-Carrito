import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'
import authRoutes from './auth.routes'
import shopRoutes from './shop.routes'
import { authGuard } from './guards'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    ...authRoutes,
    ...shopRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(authGuard)

export default router