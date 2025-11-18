<template>
  <section class="p-6 bg-white rounded shadow-md">
    <h2 class="text-2xl font-bold mb-4">Bienvenido a VITE-Carrito 🛒</h2>
    <p class="text-gray-700 mb-6">
      Explora nuestros productos, gestiona tu carrito y disfruta de una experiencia rápida y moderna.
    </p>

    <router-link
      to="/products"
      class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Ver productos
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style scoped>
section {
  max-width: 600px;
  margin: auto;
}
</style>