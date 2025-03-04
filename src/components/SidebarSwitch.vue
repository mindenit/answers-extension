<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useSidebar } from '@/composables/useSidebar'

const { showSidebar, toggleSidebar } = useSidebar()
</script>

<template>
  <button
    @click="toggleSidebar"
    class="transition-colors"
  >
    <Icon
      :icon="showSidebar ? 'ph:sidebar-simple-fill' : 'ph:sidebar-simple'"
      class="w-5 h-5"
    />
  </button>
</template>