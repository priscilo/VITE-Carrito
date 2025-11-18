export function useAuth() {
    const user = ref<User | null>(null)

    const login = async (email: string, password: string) => {
        if (!email || !password) throw new Error('Credenciales incompletas')
        // Simulación de login
        user.value = { id: '123', email }
    }

    const register = async (data: { email: string; password: string; name: string }) => {
        if (!data.email || !data.password || !data.name) throw new Error('Datos incompletos')
        // Simulación de registro
        user.value = { id: '456', email: data.email }
    }

    return { user, login, register }
}