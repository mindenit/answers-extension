<script setup lang="ts">
    import { Button } from "@mindenit/ui"
    import { Icon } from "@iconify/vue/dist/iconify.js"

    const donateUrl =  __DONATE_URL__
</script>

<template>
    <Button
      as="a"
      :href="donateUrl"
      target="_blank"
      class="flex rounded-md no-underline bg-royal-blue-500 dark:text-white"
    >
      <Icon icon="ph:jar" />Банка на розробку
    </Button>
</template>