<template>
  <div id="app" class="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <nav class="container mx-auto flex items-center justify-between py-4 px-6">
        <RouterLink to="/" class="flex items-center gap-2 text-indigo-600 font-bold text-xl hover:scale-105 transition-transform">
          <span>🛒</span>
          <span>VITE-Carrito</span>
        </RouterLink>
        <ul class="flex gap-6 text-gray-700 font-medium">
          <li><RouterLink to="/" class="hover:text-indigo-500 transition-colors" aria-label="Inicio">Inicio</RouterLink></li>
          <li><RouterLink to="/products" class="hover:text-indigo-500 transition-colors" aria-label="Productos">Productos</RouterLink></li>
          <li><RouterLink to="/cart" class="hover:text-indigo-500 transition-colors" aria-label="Carrito">Carrito</RouterLink></li>
        </ul>
      </nav>
    </header>

    <!-- Main -->
    <main class="flex-grow container mx-auto px-6 py-8">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t py-4 text-center text-sm text-gray-500">
      <p>© 2025 VITE-Carrito. Todos los derechos reservados.</p>
      <p class="mt-1">Desarrollado por INVERSIONES MULTIPLES PUMA S.R.L.</p>
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
  color: #3b82f6;
}
</style>