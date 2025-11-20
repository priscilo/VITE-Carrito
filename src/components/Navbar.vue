<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo y título -->
      <router-link to="/" class="flex items-center gap-2 text-indigo-600 font-bold text-xl hover:scale-105 transition-transform">
        <span>🛒</span>
        <span>VITE-Carrito</span>
      </router-link>

      <!-- Navegación -->
      <ul class="flex gap-6 text-gray-700 font-medium">
        <li>
          <router-link to="/" class="hover:text-indigo-500 transition-colors" aria-label="Ir a inicio">Inicio</router-link>
        </li>
        <li>
          <router-link to="/productos" class="hover:text-indigo-500 transition-colors" aria-label="Ver productos">Productos</router-link>
        </li>
        <li>
          <router-link to="/carrito" class="hover:text-indigo-500 transition-colors" aria-label="Ver carrito">Carrito</router-link>
        </li>
      </ul>

      <!-- Idioma / Usuario (opcional) -->
      <div class="hidden md:flex items-center gap-4">
        <button class="text-sm text-gray-500 hover:text-indigo-600 transition" aria-label="Cambiar idioma">🌐 ES</button>
        <router-link to="/perfil" class="text-sm text-gray-500 hover:text-indigo-600 transition" aria-label="Perfil de usuario">👤 Perfil</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
// No se requiere lógica reactiva aquí, pero puedes importar `useAuth` si deseas mostrar el nombre del usuario o estado de sesión.
</script>

<style scoped>
/* Puedes agregar estilos personalizados si no usas Tailwind */
</style>