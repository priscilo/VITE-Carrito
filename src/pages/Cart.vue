<template>
  <section class="p-6 bg-white rounded shadow-md max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Tu carrito</h2>

    <div v-if="items.length > 0" class="space-y-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex justify-between items-center border-b pb-3"
      >
        <div>
          <h3 class="font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-600">Cantidad: {{ item.quantity }}</p>
        </div>

        <div class="flex items-center gap-4">
          <p class="text-blue-600 font-bold">S/ {{ item.price * item.quantity }}</p>
          <button
            @click="removeItem(item.id)"
            class="text-red-500 hover:text-red-700 transition"
          >
            Eliminar
          </button>
        </div>
      </div>

      <div class="flex justify-between items-center mt-6 border-t pt-4">
        <span class="text-lg font-semibold">Total:</span>
        <span class="text-xl font-bold text-green-700">S/ {{ total }}</span>
      </div>

      <router-link
        to="/checkout"
        class="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Proceder al pago
      </router-link>
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
  name: 'Cart',
  setup() {
    const cart = useCartStore()

    const total = computed(() =>
      cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    )

    return {
      items: cart.items,
      removeItem: cart.removeItem,
      total,
    }
  },
})
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>