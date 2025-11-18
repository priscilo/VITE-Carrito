<template>
  <section class="p-6 max-w-md mx-auto bg-white rounded shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input
          v-model="email"
          type="email"
          id="email"
          required
          class="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          v-model="password"
          type="password"
          id="password"
          required
          minlength="6"
          class="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>

      <button
        type="submit"
        class="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Ingresar
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const router = useRouter()
    const auth = useAuthStore()

    const handleLogin = async () => {
      const success = await auth.login(email.value, password.value)
      if (success) {
        router.push('/products')
      } else {
        error.value = 'Credenciales inválidas. Intenta con admin@vite.com / 123456'
      }
    }

    return {
      email,
      password,
      error,
      handleLogin,
    }
  },
})
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}
</style>