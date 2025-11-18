// src/composables/useCart.ts
import { ref, computed } from 'vue'

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

const cart = ref<CartItem[]>([])

export function useCart() {
    const addItem = (item: Omit<CartItem, 'quantity'>) => {
        const existing = cart.value.find(i => i.id === item.id)
        if (existing) {
            existing.quantity += 1
        } else {
            cart.value.push({ ...item, quantity: 1 })
        }
    }

    const removeItem = (id: number) => {
        cart.value = cart.value.filter(item => item.id !== id)
    }

    const clearCart = () => {
        cart.value = []
    }

    const total = computed(() =>
        cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    )

    return {
        cart,
        addItem,
        removeItem,
        clearCart,
        total
    }
}