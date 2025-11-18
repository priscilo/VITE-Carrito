export default [
    {
        path: '/products',
        name: 'Products',
        component: () => import('@/pages/Products.vue'),
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/pages/Cart.vue'),
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/pages/Checkout.vue'),
        meta: { requiresAuth: true },
    },
]