<template>
  <section class="p-6 bg-white rounded shadow-md max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Nuestros productos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded p-4 shadow hover:shadow-lg transition"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-40 object-cover mb-4 rounded"
        />
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p class="text-blue-600 font-bold mb-4">S/ {{ product.price }}</p>

        <button
          @click="addToCart(product)"
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useCartStore } from '@/store/cart'
import { useProductStore } from '@/store/products'

export default defineComponent({
  name: 'Products',
  setup() {
    const cart = useCartStore()
    const productStore = useProductStore()

    onMounted(() => {
      productStore.fetchProducts()
    })

    return {
      products: productStore.products,
      addToCart: cart.addItem,
    }
  },
})
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>