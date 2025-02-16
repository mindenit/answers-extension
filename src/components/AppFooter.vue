<script setup lang="ts">
  import { Link } from '@mindenit/ui';
  import { Icon } from '@iconify/vue/dist/iconify.js';

  const telegramUrl = __TELEGRAM_URL__
  const discordUrl = __DISCORD_URL__
  const githubUrl = __GITHUB_URL__
</script>

<template>
  <footer
    class="flex justify-between items-center p-2 text-sm text-white"
  >
    <aside>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav class="flex gap-2">
      <Link
        :href="githubUrl"
        :asChild="false"
        class="text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="ph:github-logo" width="20"/> 
      </Link>
      <Link
        :href="discordUrl"
        :asChild="false"
        class="text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="ph:discord-logo" width="20"/> 
      </Link>
      <Link
        :href="telegramUrl"
        :asChild="false"
        class="text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="ph:telegram-logo" width="20"/> 
      </Link>
    </nav>
  </footer>
</template>