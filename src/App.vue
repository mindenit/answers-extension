<script setup lang="ts">
import ErrorCard from '@/components/ErrorCard.vue'
import Logo from '@/components/Logo.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import { Question } from '@/types'
import { Button } from '@mindenit/ui'
import { computed, ref } from 'vue'
import { fetchQuestions } from './services/questionService'

const resultQuestions = ref<Question[]>([])
const errorMessage = ref<string>('')

const getSelectedText = async (): Promise<string> => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    const injectionResults = await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => window.getSelection()?.toString().trim()
    })
    return injectionResults?.[0]?.result || ''
  } catch (error) {
    console.error('Помилка при виконанні скріпта:', error)
    return ''
  }
}

const findAnswer = async (): Promise<void> => {
  try {
    errorMessage.value = ''
    const selectedText = await getSelectedText()
    if (selectedText) {
      const response = await fetchQuestions(selectedText)
      if (Array.isArray(response)) {
        resultQuestions.value = response
      } else {
        errorMessage.value = 'Некоректна відповідь сервера'
      }
    } else {
      errorMessage.value = 'Питання не виділено'
    }
  } catch (error) {
    console.error('Помилка при пошуку відповіді:', error)
    errorMessage.value = 'Помилка при пошуку відповіді'
  }
}

const hasResults = computed(() => resultQuestions.value.length > 0)
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
    <template v-if="hasResults">
      <QuestionCard
        v-for="question in resultQuestions"
        :key="question.id"
        :questionId="question.id"
        :question="question.attributes"
      />
    </template>
    <template v-else-if="errorMessage">
      <ErrorCard>
        {{ errorMessage }}
      </ErrorCard>
    </template>
  </div>
</template>
