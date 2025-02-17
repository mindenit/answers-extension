<script setup lang="ts">
    import { Button } from '@mindenit/ui'
    import { Icon } from '@iconify/vue/dist/iconify.js'

    const telegramUrl = __TELEGRAM_URL__
</script>

<template>
    <Button 
      as="a" 
      :href="telegramUrl"
      target="_blank"
      class="flex rounded-md no-underline bg-royal-blue-500 dark:text-white"
    >
      <Icon icon="ph:telegram-logo" size="16px" /> 
      Група у телеграм
    </Button> 
</template>