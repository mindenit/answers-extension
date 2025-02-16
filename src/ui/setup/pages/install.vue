<script setup lang="ts">
import { Heading, Link, Text, Button } from "@mindenit/ui"
import { Icon } from "@iconify/vue/dist/iconify.js"

const displayName = __DISPLAY_NAME__
const supportUrl = __SUPPORT_URL__
const donateUrl = __DONATE_URL__
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 dark:text-white ">
    <div class="p-8 max-w-lg w-full text-center border rounded-[40px] border-fiord-300 dark:border-fiord-700">
      <div class="flex justify-center mb-6">
        <div class="bg-christi-100 rounded-full p-3 flex items-center justify-center w-16 h-16">
          <RoundCheck />
        </div>
      </div>

      <Heading size="large">Дякуємо за встановлення {{ displayName }}!</Heading>

      <Text 
        size="paragraph"
      >
        Ми раді вітати вас у нашій спільноті. Сподіваємося, що наше розширення стане корисним інструментом у вашій роботі.
      </Text>

      <Heading size="medium">Як користуватися</Heading>
      <Text size="paragraph">
        Достатньо зайти на
        <Link class="text-royal-blue-500" href="https://dl.nure.ua/" :asChild="false">dl.nure.ua</Link>, виділити текст і натиснути на іконку розширення, що з'явиться 😉
      </Text>
      <div class="flex flex-col md:flex-row gap-6 w-full md:items-center md:justify-center">
        <TelegramButton />
        <MonobankButton  />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>