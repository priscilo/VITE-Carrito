<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
const { register } = useAuth()
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const handleRegister = async () => {
  try {
    await register({ name: name.value, email: email.value, password: password.value })
  } catch (e) {
    error.value = 'Todos los campos son obligatorios'
  }
}
</script>