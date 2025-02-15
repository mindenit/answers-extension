<script setup lang="ts">
import { Heading, Link, Text } from "@mindenit/ui";
const displayName = __DISPLAY_NAME__;
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-fiord-950 p-4">
    <div class="bg-fiord-900 border border-fiord-800 rounded-lg shadow-royal-blue-500/20 p-8 max-w-md w-full text-center">
      <div class="flex justify-center mb-6">
        <div class="bg-christi-100 rounded-full p-3 flex items-center justify-center w-16 h-16">
          <RoundCheck />
        </div>
      </div>

      <Heading size="large">Дякуємо за встановлення {{ displayName }}!</Heading>

      <Text size="paragraph">
        Ми раді вітати вас у нашій спільноті. Сподіваємося, що наше розширення стане корисним інструментом у вашій роботі.
      </Text>

      <Heading size="medium">Як користуватися</Heading>
      <Text size="paragraph">
        Достатньо зайти на
        <Link href="https://dl.nure.ua/" :asChild="false">dl.nure.ua</Link>, виділити текст і натиснути на іконку розширення, що з'явиться 😉
      </Text>
    </div>
  </div>
</template>

<style scoped>
/* Додаткові стилі, якщо потрібно */
</style>