<template>
  <div
    class="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
    v-if="item"
  >
    <img
      :src="item.imagen || '/placeholder.png'" 
      :alt="item.nombre || 'Producto'"
      class="w-full h-48 object-cover mb-4 rounded"
    />

    <h2 class="text-lg font-semibold mb-2">{{ item.nombre || 'Sin nombre' }}</h2>

    <p class="text-gray-600 mb-4">
      {{ item.descripcion || 'Sin descripción disponible' }}
    </p>

    <div class="text-blue-600 font-bold text-xl">
      ${{ (item.precio ?? 0).toFixed(2) }}
    </div>
  </div>

  <div v-else class="p-4 text-center text-gray-400">
    Cargando producto...
  </div>
</template>

<script setup lang="ts">
import type { Mueble } from '@/data/muebles'

// Define props con default usando withDefaults para evitar warnings
const props = withDefaults(defineProps<{ item?: Mueble }>(), {
  item: undefined,
})

const { item } = props
</script>

<style scoped>
/* Puedes agregar hover extra o sombras más suaves aquí si quieres */
</style>
