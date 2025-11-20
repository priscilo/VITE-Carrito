import { ref, computed, watch } from 'vue'

export interface CartItem {
    id: string
    name: string
    price: number
    category: string
    quantity: number
}

const cart = ref<CartItem[]>(loadFromStorage())

function loadFromStorage(): CartItem[] {
    try {
        const raw = localStorage.getItem('cart')
        return raw ? JSON.parse(raw) : []
    } catch (e) {
        console.warn('[useCart] Error loading cart:', e)
        return []
    }
}

watch(
    cart,
    value => {
        try {
            localStorage.setItem('cart', JSON.stringify(value))
        } catch (e) {
            console.warn('[useCart] Error saving cart:', e)
        }
    },
    { deep: true }
)

export function useCart() {
    const addItem = (item: { id: string; name: string; price: number; category: string }) => {
        if (!item.id || !item.name || item.price <= 0 || !item.category) {
            console.warn('[useCart] ❌ Item inválido:', item)
            return
        }

        const existing = cart.value.find(i => i.id === item.id)

        if (existing) {
            cart.value = cart.value.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
        } else {
            cart.value.push({ ...item, quantity: 1 })
        }
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id)
            return
        }
        cart.value = cart.value.map(i =>
            i.id === id ? { ...i, quantity } : i
        )
    }

    const removeItem = (id: string) => {
        cart.value = cart.value.filter(i => i.id !== id)
    }

    const clearCart = () => {
        cart.value = []
    }

    const items = computed(() => cart.value)

    const total = computed(() =>
        cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    )

    const itemCount = computed(() =>
        cart.value.reduce((sum, item) => sum + item.quantity, 0)
    )

    return {
        cart,
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        total,
        itemCount,
    }
}