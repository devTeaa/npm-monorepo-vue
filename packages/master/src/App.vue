<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'

const route = useRoute()

const collabJs = ref('')

// const isCollab = computed(() => {
//   return route.fullPath.includes('/slave')
// })

onMounted(() => {
  collabJs.value = 'http://localhost:9991/assets/index-slave.fJLqRhpf.js'
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

  <!-- <component
    :is="'script'"
    :type="'module'"
    :src="'http://localhost:5181/src/main.ts'"
  ></component> -->
  <component
    :is="'script'"
    :type="'module'"
    :src="'http://localhost:9991/assets/index-slave.fJLqRhpf.js'"
  ></component>
</template>

<style scoped></style>
