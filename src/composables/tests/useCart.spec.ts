// src/composables/__tests__/useCart.spec.ts
import { describe, it, expect } from 'vitest'
import { useCart } from '../useCart'

describe('useCart composable', () => {
    it('agrega un producto al carrito', () => {
        const { cart, addToCart } = useCart()
        const producto = { id: 1, nombre: 'Silla Puma', precio: 100 }

        addToCart(producto)

        expect(cart.value.length).toBe(1)
        expect(cart.value[0].id).toBe(1)
    })

    it('evita duplicados al agregar el mismo producto', () => {
        const { cart, addToCart } = useCart()
        const producto = { id: 2, nombre: 'Mesa Puma', precio: 200 }

        addToCart(producto)
        addToCart(producto)

        expect(cart.value.length).toBe(1)
    })

    it('elimina un producto por ID', () => {
        const { cart, addToCart, removeFromCart } = useCart()
        const producto = { id: 3, nombre: 'Lámpara Puma', precio: 50 }

        addToCart(producto)
        removeFromCart(3)

        expect(cart.value.length).toBe(0)
    })
})