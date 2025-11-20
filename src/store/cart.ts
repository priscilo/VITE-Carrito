// src/store/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as { id: number; name: string; price: number; quantity: number }[],
    }),
    actions: {
        removeItem(id: number) {
            this.items = this.items.filter(item => item.id !== id)
        },
    },
})
