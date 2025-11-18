<template>
  <section class="p-6 bg-white rounded shadow-md max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Resumen de compra</h2>

    <div v-if="cartItems.length > 0" class="space-y-4">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-between items-center border-b pb-2"
      >
        <div>
          <h3 class="font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-600">Cantidad: {{ item.quantity }}</p>
        </div>
        <p class="text-blue-600 font-bold">S/ {{ item.price * item.quantity }}</p>
      </div>

      <div class="flex justify-between items-center mt-6 border-t pt-4">
        <span class="text-lg font-semibold">Total:</span>
        <span class="text-xl font-bold text-green-700">S/ {{ total }}</span>
      </div>

      <button
        @click="confirmCheckout"
        class="mt-6 w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Confirmar pedido
      </button>
    </div>

    <div v-else class="text-center text-gray-500">
      Tu carrito está vacío.
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '@/store/cart'

export default defineComponent({
  name: 'Checkout',
  setup() {
    const cart = useCartStore()

    const total = computed(() =>
      cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    )

    const confirmCheckout = () => {
      alert('¡Pedido confirmado! Gracias por tu compra.')
      cart.clearCart()
    }

    return {
      cartItems: cart.items,
      total,
      confirmCheckout,
    }
  },
})
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>