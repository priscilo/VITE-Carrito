import type { RouteRecordRaw } from 'vue-router'

// Función helper para importar componentes de forma segura
const loadView = (view: string) => {
    return () => import(`@/pages/${view}.vue`).catch(err => {
        console.error(`Error cargando la vista ${view}:`, err)
        // Opcional: redirigir a una página de error o componente fallback
        return import('@/pages/NotFound.vue')
    })
}

const routes: RouteRecordRaw[] = [
    {
        path: '/products',
        name: 'Products',
        component: loadView('Products'),
    },
    {
        path: '/cart',
        name: 'Cart',
        component: loadView('Cart'),
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: loadView('Checkout'),
        meta: { requiresAuth: true },
    },
    // Ruta fallback para páginas no encontradas
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: loadView('NotFound'),
    },
]

export default routes
