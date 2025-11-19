<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Catálogo de Muebles</h1>

    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="cat in categorias"
        :key="cat"
        @click="categoriaSeleccionada = cat"
        :class="[
          'px-4 py-2 rounded',
          categoriaSeleccionada === cat
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="items.length === 0" class="text-gray-500">
      No hay muebles disponibles para esta categoría.
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="item in items"
        :key="item.nombre"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCatalogo } from '@/composables/useCatalogo'
import ProductCard from '@/components/ProductCard.vue'
import type { Mueble } from '@/types/Mueble'

const { categorias, getItemsPorCategoria } = useCatalogo()
const categoriaSeleccionada = ref(categorias[0] || '')

const items = computed<Mueble[]>(() =>
  getItemsPorCategoria(categoriaSeleccionada.value)
)
</script>

<style scoped>
button {
  transition: all 0.2s ease;
}
</style>