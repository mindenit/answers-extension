<script setup lang="ts">
import { Link, Text, Heading } from '@mindenit/ui'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { marked } from 'marked'

const displayName = __DISPLAY_NAME__
const version = __VERSION__
const changelog = __CHANGELOG__

</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 dark:text-white">
    <div class="p-8 max-w-lg w-full text-center border rounded-[40px] border-fiord-300 dark:border-fiord-700">
      <div class="flex justify-center mb-6">
        <div class="rounded-full p-3 flex items-center justify-center">
          <img src="@assets/confetti-emoji.svg" class="w-20 my-0" />
        </div>
      </div>

      <Heading size="large">Оновлення! </Heading>

      <Text size="paragraph">
        Ми раді повідомити, що ваше розширення було успішно оновлено до версії {{ version }}.
      </Text>

      <div class=" ">
        <div
          class="changelog prose dark:text-white prose-md dark:prose-invert max-w-none
            prose-headings:mb-2 
            prose-headings:mt-4
            prose-p:mb-3
            prose-ul:py-5
            prose-ul:space-y-2
            prose-ul:text-justify
            prose-li:list-none"
          v-html="marked(changelog)"
        />
      </div>

      <div class="flex flex-col md:flex-row gap-6 w-full md:items-center md:justify-center mt-6">
        <SupportButton />
        <MonobankButton />
      </div>
    </div>
  </div>
</template>
