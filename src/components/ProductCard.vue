<template>
  <div
    class="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
    role="article"
    aria-label="Producto disponible"
  >
    <img
      :src="item.imagen || '/no-image.png'"
      :alt="item.nombre || 'Imagen no disponible'"
      @error="handleImgError"
      class="w-full h-48 object-cover mb-4 rounded"
    />

    <h2 class="text-lg font-semibold mb-2">
      {{ item.nombre || 'Producto sin nombre' }}
    </h2>

    <p class="text-gray-600 mb-4">
      {{ item.descripcion || 'Sin descripción disponible.' }}
    </p>

    <div class="text-blue-600 font-bold text-xl mb-4">
      {{ precioFormateado }}
    </div>

    <button
      @click="agregarAlCarrito"
      class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-150 active:scale-[0.97]"
      :aria-label="`Agregar ${item.nombre} al carrito`"
    >
      {{ t('boton.agregar') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Mueble } from '@/types/Mueble'
import { useCart } from '@/composables/useCart'

const props = defineProps<{ item: Mueble }>()

const { addItem } = useCart()
const { t } = useI18n()

const handleImgError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/no-image.png'
  img.alt = 'Imagen no disponible'
}

const precioFormateado = computed(() =>
  props.item?.precio?.toLocaleString('es-PE', {
    style: 'currency',
    currency: 'PEN'
  }) || 'S/. 0.00'
)

const agregarAlCarrito = () => {
  if (!props.item?.nombre || !props.item?.precio) return
  addItem({
    name: props.item.nombre,
    price: props.item.precio,
    category: props.item.categoria || 'sin-categoria'
  })
}
</script>

<style scoped>
button {
  font-weight: 600;
}
</style>