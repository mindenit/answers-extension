<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import { Button, Heading, Text } from '@mindenit/ui'
import { ref } from 'vue'

const result = ref<any>('')

const fetchAnswer = async (selectedText: string) => {
  try {
    const response = await fetch(
      `http://localhost:1337/api/questions?populate=test&filters[name][$contains]=${encodeURIComponent(selectedText)}`
    )
    const data = await response.json()
    result.value = data.data?.length ? data.data : 'Відповідь не знайдена'
  } catch (error) {
    console.error('Помилка при запиті до API:', error)
    result.value = 'Щось пішло не так...'
  }
}

const getSelectedText = async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    const injectionResults = await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => window.getSelection()?.toString().trim().toLowerCase()
    })

    return injectionResults?.[0]?.result || ''
  } catch (error) {
    console.error('Помилка при виконанні скрипта:', error)
    result.value = 'Щось пішло не так...'
    return ''
  }
}

const findAnswer = async () => {
  const selectedText = await getSelectedText()

  if (selectedText) {
    await fetchAnswer(selectedText)
  } else {
    result.value = 'Питання не виділено'
  }
}
</script>

<template>
  <div
    class="w-[400px] p-2 bg-fiord-900 text-white flex flex-col gap-2 items-center"
  >
    <Logo />
    <div class="flex gap-2 w-full">
      <Button class="w-full" @click="findAnswer">Пошук</Button>
      <Button
        as="a"
        href="https://paste_link_here"
        target="_blank"
        class="w-full"
        >Mindenit Answers</Button
      >
    </div>
    <template v-if="Array.isArray(result) && result.length">
      <div
        class="w-full p-1 bg-fiord-800 border border-fiord-700 rounded-lg text-base flex flex-col gap-1"
        v-for="data in result"
      >
        <Heading size="small" class="text-white">{{
          data.attributes.name
        }}</Heading>
        <Text size="paragraph">{{ data.attributes.answer }}</Text>
        <hr />
        <Text size="subtitle"
          >Тест: {{ data.attributes.test.data.attributes.name }}</Text
        >
      </div>
    </template>
    <template v-else>
      <div
        class="w-full p-1 bg-fiord-800 border border-fiord-700 rounded-lg text-base"
      >
        {{ result }}
      </div>
    </template>
  </div>
</template>
