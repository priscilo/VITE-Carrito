<template>
  <header class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="logo">
        <img src="/icons/logo.png" alt="Starbucks Perú" />
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/menu">Menú</RouterLink>
        <RouterLink to="/about">Sobre Starbucks</RouterLink>
        <RouterLink to="/tiendas">Ubícanos</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// No se requiere lógica por ahora
</script>

<style scoped>
.navbar {
  background-color: #006341;
  padding: 1rem 2rem;
  color: white;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>