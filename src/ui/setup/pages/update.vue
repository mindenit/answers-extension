<script setup lang="ts">
import { Link, Text, Heading } from '@mindenit/ui';
const displayName = __DISPLAY_NAME__
const version = __VERSION__
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 dark:text-white">
    <div class="p-8 max-w-lg w-full text-center border rounded-[40px] border-fiord-300 dark:border-fiord-700">
      <div class="flex justify-center mb-6">
        <div class="bg-christi-100 rounded-full p-3 flex items-center justify-center w-16 h-16">
          <RoundCheck />
        </div>
      </div>

      <Heading size="large">Дякуємо за оновлення {{ displayName }}!</Heading>

      <Text size="paragraph">
        Ми раді повідомити, що ваше розширення було успішно оновлено до нової версії. Ось що нового:
      </Text>

      <ul class="text-left my-6">
        <li class="mb-2">🔥 Виправлені візуальні баги в темній темі.</li>
        <li class="mb-2">🚀 Покращена продуктивність роботи з великими документами.</li>
        <li class="mb-2">✨ Додано підтримку нових функцій на dl.nure.ua.</li>
      </ul>

      <Heading size="medium">Як користуватися</Heading>
      <Text size="paragraph">
        Просто зайдіть на
        <Link class="text-royal-blue-500" href="https://dl.nure.ua/" :asChild="false">dl.nure.ua</Link>, виділіть текст і натисніть на іконку розширення, що з'явиться 😉
      </Text>

      <div class="flex flex-col md:flex-row gap-6 w-full md:items-center md:justify-center mt-6">
        <SupportButton />
        <MonobankButton />
      </div>
    </div>
  </div>
</template>
