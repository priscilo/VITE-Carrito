import { muebles } from '@/data/muebles'

export function useCatalogo() {
    const categorias = muebles.map(c => c.categoria)
    const getItemsPorCategoria = (categoria: string) =>
        muebles.find(c => c.categoria === categoria)?.items || []
    return { categorias, getItemsPorCategoria }
}