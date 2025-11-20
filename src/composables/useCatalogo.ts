import { computed } from 'vue'
import { muebles } from '@/data/muebles'
import type { MuebleGrupo } from '@/types/MuebleGrupo'

export function useCatalogo() {
    // Normaliza texto para comparación defensiva
    const normalizar = (c: string): string =>
        c?.toString().toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    // Extrae categorías únicas y defensivas
    const categorias = computed<string[]>(() => {
        const todas = muebles.map(c => c?.categoria).filter(Boolean)
        const normalizadas = [...new Set(todas.map(normalizar))]
        return normalizadas
    })

    // Devuelve los items de una categoría específica
    const getItemsPorCategoria = (categoria: string): MuebleGrupo['items'] => {
        if (!categoria) return []
        const encontrada = muebles.find(
            c => normalizar(c.categoria) === normalizar(categoria)
        )
        if (!encontrada?.items) {
            console.warn(`⚠️ Categoría no encontrada: "${categoria}"`)
            return []
        }
        return encontrada.items
    }

    return {
        categorias,
        getItemsPorCategoria
    }
}