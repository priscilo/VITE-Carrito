// src/composables/useCart.ts
import { ref, computed } from 'vue'

export interface CartItem {
    id: string // ID defensivo: categoria-nombre
    name: string
    price: number
    category: string
    quantity: number
}

const cart = ref<CartItem[]>([])

export function useCart() {
    const generateId = (name: string, category: string) =>
        `${category}-${name}`.replace(/\s+/g, '-').toLowerCase()

    const addItem = (item: { name: string; price: number; category: string }) => {
        if (!item.name || item.price <= 0 || !item.category) {
            console.warn('[useCart] ❌ Item inválido:', item)
            return
        }

        const id = generateId(item.name, item.category)
        const existing = cart.value.find(i => i.id === id)

        if (existing) {
            existing.quantity += 1
        } else {
            cart.value.push({
                id,
                name: item.name,
                price: item.price,
                category: item.category,
                quantity: 1
            })
        }
    }

    const removeItem = (id: string) => {
        cart.value = cart.value.filter(item => item.id !== id)
    }

    const clearCart = () => {
        cart.value = []
    }

    const total = computed(() =>
        cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    )

    const itemCount = computed(() =>
        cart.value.reduce((sum, item) => sum + item.quantity, 0)
    )

    return {
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        itemCount
    }
}