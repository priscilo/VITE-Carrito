<script lang="ts">
import { defineComponent } from 'vue'
import { useCart } from '@/composables/useCart'

export default defineComponent({
  name: 'Cart',
  setup() {
    const { items, removeItem, total, itemCount, cart } = useCart()

    const increaseQuantity = (id: string) => {
      const item = cart.value.find(i => i.id === id)
      if (item) item.quantity++
    }

    const decreaseQuantity = (id: string) => {
      const item = cart.value.find(i => i.id === id)
      if (item && item.quantity > 1) item.quantity--
    }

    return {
      items,
      removeItem,
      total,
      itemCount,
      increaseQuantity,
      decreaseQuantity,
    }
  },
})
</script>

<template>
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold text-indigo-600 text-center mb-8">🛒 Tu carrito</h2>

    <!-- Carrito vacío -->
    <div v-if="items.length === 0" class="bg-white shadow-md rounded-lg p-8 text-center">
      <p class="text-lg text-gray-600 mb-6">Tu carrito está vacío 🛍️</p>
      <router-link
        to="/products"
        class="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 transition"
        aria-label="Explorar productos"
      >
        Ver productos
      </router-link>
    </div>

    <!-- Carrito con productos -->
    <div v-else class="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto space-y-6">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex justify-between items-center border-b pb-4"
      >
        <div>
          <h3 class="font-semibold text-lg">{{ item.name || 'Producto sin nombre' }}</h3>
          <p class="text-sm text-gray-600">Cantidad: {{ item.quantity }}</p>
          <div class="flex gap-2 mt-2">
            <button
              @click="decreaseQuantity(item.id)"
              class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              :disabled="item.quantity <= 1"
              aria-label="Disminuir cantidad"
            >
              −
            </button>
            <button
              @click="increaseQuantity(item.id)"
              class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <p class="text-blue-600 font-bold">
            S/ {{ (item.price * item.quantity).toFixed(2) }}
          </p>
          <button
            @click="removeItem(item.id)"
            class="text-red-500 hover:text-red-700 transition"
            aria-label="Eliminar producto"
          >
            Eliminar
          </button>
        </div>
      </div>

      <!-- Total y acción -->
      <div class="flex justify-between items-center border-t pt-6">
        <span class="text-lg font-semibold">Total ({{ itemCount }} artículos):</span>
        <span class="text-xl font-bold text-green-700">S/ {{ total.toFixed(2) }}</span>
      </div>

      <div class="text-center mt-6">
        <router-link
          to="/checkout"
          class="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          aria-label="Proceder al pago"
        >
          Proceder al pago
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCart } from '@/composables/useCart'

const { items, removeItem, total, itemCount, cart } = useCart()

const increaseQuantity = (id: string) => {
  const item = cart.value.find(i => i.id === id)
  if (item) item.quantity++
}

const decreaseQuantity = (id: string) => {
  const item = cart.value.find(i => i.id === id)
  if (item && item.quantity > 1) item.quantity--
}
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>