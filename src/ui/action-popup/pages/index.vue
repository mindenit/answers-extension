<script setup lang="ts">
import { Heading, Text } from "@mindenit/ui"
const supportUrl = __SUPPORT_URL__
</script>

<template>
  <div>
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <Heading size="large">Вітаємо вас у розширені Mindenit Answers!</Heading>
          <Text size="paragraph">
            Знаходьте відповіді ефективніше з нами! Зекономте час для більш важливих речей!❤️
          </Text>

          <div class="flex gap-2 justify-center mb-4">
            <RouterLink
              to="/common/features"
              class="btn btn-primary"
            >
              <TelegramButton :href="supportUrl"/>              
            </RouterLink>
            <RouterLink
              to="/common/pricing"
              class="btn btn-primary"
            >
              <i-ph-presentation-chart />
              Pricing
            </RouterLink>
          </div>

          <RouterLink
            to="/common/account/login"
            class="btn btn-secondary btn-lg"
          >
            <i-ph-rocket-launch />
            Get Started Now
          </RouterLink>

          <br />

          <RouterLink
            to="/action-popup/playground"
            class="btn btn-link"
          >
            Playground
          </RouterLink>

          <a
            class="btn btn-link"
            href="https://github.com/mubaidr/vite-vue3-browser-extension-v3"
          >
            Documentation
          </a>

          <a
            class="btn btn-link"
            href="https://mubaidr.js.org"
          >
            Support
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
