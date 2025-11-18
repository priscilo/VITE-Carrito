

## 🛒 VITE-Carrito

Aplicación web moderna para gestionar productos, visualizar detalles y operar un carrito de compras de forma rápida, responsiva y segura. Construida con **Vue 3**, **Vite**, **TypeScript** y arquitectura modular defensiva.

---

### 📦 Estructura del proyecto

```bash
src/
├── assets/         # Imágenes, íconos, fuentes
├── components/     # Reutilizables (ProductCard, CartItem, QuantitySelector)
├── composables/    # Lógica reactiva (useCart, useProduct)
├── layouts/        # Layouts base (MainLayout, AuthLayout)
├── pages/          # Vistas principales (Home, Products, Cart, Checkout)
├── plugins/        # Configuración global (i18n, pinia)
├── router/         # Rutas con lazy loading
├── store/          # Estado global con Pinia
├── types/          # Interfaces y tipos (Product, CartItem)
├── App.vue         # Componente raíz
└── main.ts         # Punto de entrada
```

---

### 🧠 Tecnologías

- ⚡ Vite
- 🍃 Vue 3 + Composition API
- 🛡️ TypeScript
- 🗂️ Pinia
- 🌐 Vue Router
- 🎨 Tailwind CSS (opcional)
- 🧪 Vitest (testing opcional)

---

### 🧪 Scripts útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Limpiar entorno y liberar puertos (Windows)
powershell ./scripts/clean.ps1
```

---

### 🧭 Diagrama de navegación (Mermaid)

```mermaid
graph TD
  A[Home.vue] --> B[Products.vue]
  B --> C[Cart.vue]
  C --> D[Checkout.vue]
  A --> E[Login.vue]
  E --> F[Register.vue]
```

---

### 🛡️ Composable defensivo: `useCart.ts`

```ts
export function useCart() {
  const cart = ref<CartItem[]>([])
  const addItem = (item: Product) => {
    if (!item || !item.id || item.price <= 0) return
    const existing = cart.value.find(p => p.id === item.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cart.value.push({ ...item, quantity: 1 })
    }
  }
  const removeItem = (id: string) => {
    cart.value = cart.value.filter(p => p.id !== id)
  }
  return { cart, addItem, removeItem }
}


Alias recomendados (`vite.config.ts`)

```ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
})
```
 Onboarding multicultural

- Comentarios bilingües (español/inglés)
- Props descriptivos y consistentes
- Diagramas Mermaid para navegación y lógica
- Validación visual y accesibilidad en dispositivos móviles

src/
├── pages/
│   ├── Login.vue
│   └── Register.vue
├── composables/
│   └── useAuth.ts
├── store/
│   └── auth.ts

graph TD
  A[Login.vue] --> B[useAuth.ts]
  B --> C[auth.ts]
  A --> D[Home.vue]
  E[Register.vue] --> B
  E --> D

 
🔐 Diagrama de flujo de autenticación

Este diagrama muestra cómo los componentes `Login.vue` y `Register.vue` interactúan con la lógica de autenticación y navegación:

```mermaid
graph TD
  A[Login.vue] --> B[useAuth.ts]
  B --> C[auth.ts]
  A --> D[Home.vue]
  E[Register.vue] --> B
  E --> D


### 🧭 Explicación visual

- **Login.vue** y **Register.vue** son las interfaces de entrada para usuarios.
- Ambos usan el composable **useAuth.ts**, que centraliza la lógica de login y registro.
- **useAuth.ts** comunica con el store **auth.ts** para gestionar el estado del usuario.
- Tras autenticarse, el flujo redirige a **Home.vue**.


### 🌍 Recomendaciones para equipos multiculturales

- Comentarios bilingües en componentes (`es` / `en`)
- Validación defensiva en formularios (`required`, `email`, `minLength`)
- Mensajes de error claros y accesibles
- Navegación visual con diagramas Mermaid para facilitar el onboarding

src/pages/Home.vue
src/pages/NotFound.vue
src/pages/Login.vue
src/pages/Register.vue
src/pages/Products.vue
src/pages/Cart.vue
src/pages/Checkout.vue