<script setup lang="ts">
const router = useRouter()

defineProps<{
  label?: string
}>()
</script>

<template>
  <button
    class="btn btn-sm my-4"
    @click="router.back()"
  >
    <i-ph-arrow-left />
    {{ label || 'Назад' }}
  </button>
</template>

<style scoped></style>
