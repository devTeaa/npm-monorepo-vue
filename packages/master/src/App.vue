<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'

const route = useRoute()

const isCollab = computed(() => {
  return route.fullPath.includes('/slave')
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/slave">Slave</RouterLink>
      </nav>
    </div>
  </header>

  <div>Monorepo setup</div>

  <RouterView />

  <component
    :is="'script'"
    :type="'module'"
    :src="'http://localhost:5181/src/main.ts'"
  ></component>
</template>

<style scoped></style>
