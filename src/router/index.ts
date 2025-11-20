import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import NotFound from '@/pages/NotFound.vue'
import authRoutes from './auth.routes'
import shopRoutes from './shop.routes'
import { authGuard } from './guards'

// 📌 Rutas principales
const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: false,
            title: 'Inicio'
        }
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: {
            requiresAuth: false,
            title: 'Productos'
        }
    },
    ...authRoutes,
    ...shopRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'Página no encontrada'
        }
    }
]

// 🚀 Crear instancia del router
const router = createRouter({
    history: createWebHistory(),
    routes: baseRoutes,
    scrollBehavior(): { top: number } {
        return { top: 0 }
    }
})

// 🔐 Guardias globales
router.beforeEach((to, from, next) => {
    // 🧭 Registro de navegación
    console.info(`🔄 Navegando de ${from.fullPath} a ${to.fullPath}`)

    // 🏷️ Título dinámico
    document.title = to.meta?.title
        ? `🛒 VITE-Carrito – ${to.meta.title}`
        : '🛒 VITE-Carrito'

    // 🔐 Verificación de autenticación
    authGuard(to, from, next)
})

export default router