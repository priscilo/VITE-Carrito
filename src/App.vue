<template>
  <div id="app" class="min-h-screen bg-gray-50 text-gray-900 font-sans">
    <header class="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 class="text-xl font-bold">🛒 VITE-Carrito</h1>
      <nav>
        <RouterLink to="/" class="mx-2 hover:underline">Inicio</RouterLink>
        <RouterLink to="/products" class="mx-2 hover:underline">Productos</RouterLink>
        <RouterLink to="/cart" class="mx-2 hover:underline">Carrito</RouterLink>
      </nav>
    </header>

    <main class="p-4">
      <RouterView />
    </main>

    <footer class="bg-white border-t p-4 text-center text-sm text-gray-500">
      © 2025 VITE-Carrito. Todos los derechos reservados.
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

a {
  transition: color 0.2s ease;
}

a:hover {
  color: #3b82f6; /* azul Tailwind */
}
</style>