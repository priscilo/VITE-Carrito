import { useAuthStore } from '@/store/auth'

export function authGuard(to, from, next) {
    const auth = useAuthStore()
    if (to.meta.requiresAuth && !auth.user) {
        next('/login')
    } else {
        next()
    }
}