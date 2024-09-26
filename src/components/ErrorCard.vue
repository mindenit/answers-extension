<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Text } from '@mindenit/ui'
</script>
<template>
  <div
    class="flex flex-col bg-fiord-900 w-full h-fit p-3 rounded-xl border border-fiord-700 gap-2"
  >
    <div class="flex items-center gap-2 p-2 bg-amaranth-950 rounded-lg">
      <Icon icon="ph:x-circle-bold" class="text-amaranth-400" />
      <Text size="paragraph"><slot /></Text>
    </div>
  </div>
</template>
