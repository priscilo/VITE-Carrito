import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
    id: string
    name: string
    email: string
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const token = ref<string | null>(null)

    // Cargar desde localStorage al iniciar
    const loadFromStorage = () => {
        const storedUser = localStorage.getItem('auth_user')
        const storedToken = localStorage.getItem('auth_token')
        if (storedUser && storedToken) {
            user.value = JSON.parse(storedUser)
            token.value = storedToken
        }
    }

    // Simulación de login
    const login = async (email: string, password: string) => {
        // Simulación de autenticación
        if (email === 'admin@vite.com' && password === '123456') {
            const fakeUser: User = {
                id: '1',
                name: 'Administrador',
                email,
            }
            const fakeToken = 'abc123token'

            user.value = fakeUser
            token.value = fakeToken

            localStorage.setItem('auth_user', JSON.stringify(fakeUser))
            localStorage.setItem('auth_token', fakeToken)

            return true
        }
        return false
    }

    const logout = () => {
        user.value = null
        token.value = null
        localStorage.removeItem('auth_user')
        localStorage.removeItem('auth_token')
    }

    const isAuthenticated = computed(() => !!token.value)

    return {
        user,
        token,
        isAuthenticated,
        login,
        logout,
        loadFromStorage,
    }
})