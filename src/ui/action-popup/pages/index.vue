<script setup lang="ts">
import { Heading, Text } from "@mindenit/ui"
import MonobankButton from "@/components/MonobankButton.vue"
</script>

<template>
  <div class="bg-fiord-50 dark:bg-fiord-900 min-h-auto transition-colors duration-200">
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <Heading size="large" class="text-fiord-900 dark:text-fiord-50">
            Вітаємо вас у розширені Mindenit Answers!
          </Heading>
          
          <Text size="paragraph" class="text-fiord-600 dark:text-fiord-200">
            Знаходьте відповіді ефективніше з нами! Зекономте час для більш важливих речей!❤️
          </Text>

          <div class="flex gap-2 justify-center mb-4">
            <SupportButton  />
            <MonobankButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>