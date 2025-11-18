<template>
  <section class="flex flex-col items-center justify-center h-[80vh] text-center p-6">
    <h1 class="text-5xl font-bold text-red-600 mb-4">404</h1>
    <h2 class="text-2xl font-semibold mb-2">Página no encontrada</h2>
    <p class="text-gray-600 mb-6">
      Lo sentimos, la ruta que intentaste acceder no existe o fue movida.
    </p>

    <router-link
      to="/"
      class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Volver al inicio
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
})
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>