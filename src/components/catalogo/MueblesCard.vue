<template>
  <div
    class="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
    v-if="item"
    role="article"
    aria-label="Producto disponible"
  >
    <img
      :src="item.imagen || '/placeholder.png'"
      :alt="item.nombre || 'Producto'"
      @error="handleImgError"
      class="w-full h-48 object-cover mb-4 rounded"
    />

    <h2 class="text-lg font-semibold mb-2">{{ item.nombre || 'Sin nombre' }}</h2>

    <p class="text-gray-600 mb-4">
      {{ item.descripcion || 'Sin descripción disponible' }}
    </p>

    <div class="text-blue-600 font-bold text-xl mb-4">
      {{ precioFormateado }}
    </div>

    <button
      @click="agregarAlCarrito"
      class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors duration-150 active:scale-[0.97]"
      :aria-label="`Agregar ${item.nombre} al carrito`"
    >
      Agregar al carrito
    </button>
  </div>

  <div v-else class="p-4 text-center text-gray-400">
    Cargando producto...
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCart } from '@/composables/useCart'
import type { Mueble } from '@/types/Mueble'

const props = withDefaults(defineProps<{ item?: Mueble }>(), {
  item: undefined,
})

const { item } = props
const { addItem } = useCart()

const handleImgError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/placeholder.png'
  img.alt = 'Imagen no disponible'
}

const precioFormateado = computed(() =>
  item?.precio?.toLocaleString('es-PE', {
    style: 'currency',
    currency: 'PEN',
  }) || 'S/. 0.00'
)

const agregarAlCarrito = () => {
  if (!item?.id || !item?.nombre || !item?.precio) {
    console.warn('[MuebleCard] ❌ Datos incompletos para agregar al carrito:', item)
    return
  }

  addItem({
    id: item.id,
    name: item.nombre,
    price: item.precio,
    category: item.categoria || 'sin-categoria',
  })
}
</script>

<style scoped>
button {
  font-weight: 600;
}
</style>