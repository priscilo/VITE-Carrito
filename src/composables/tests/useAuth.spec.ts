// src/composables/__tests__/useAuth.spec.ts
import { describe, it, expect } from 'vitest'
import { useAuth } from '../useAuth'

describe('useAuth composable', () => {
    it('inicia sesión correctamente', async () => {
        const { login, isAuthenticated } = useAuth()
        await login('admin', 'admin123')

        expect(isAuthenticated.value).toBe(true)
    })

    it('falla con credenciales incorrectas', async () => {
        const { login, isAuthenticated } = useAuth()
        await login('admin', 'wrongpass')

        expect(isAuthenticated.value).toBe(false)
    })
})