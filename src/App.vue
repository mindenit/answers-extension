<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import { Question } from '@/types'
import { Button } from '@mindenit/ui'
import { computed, ref } from 'vue'
import { fetchQuestions } from './services/questionService'

const result = ref<Question[] | string>('')

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
    const selectedText = await getSelectedText()
    if (selectedText) {
      result.value = await fetchQuestions(selectedText)
    } else {
      result.value = 'Питання не виділено'
    }
  } catch (error) {
    console.error('Помилка при пошуку відповіді:', error)
  }
}

const isResultArray = computed(
  () => Array.isArray(result.value) && result.value.length
)

const resultQuestions = computed(() =>
  isResultArray.value ? (result.value as Question[]) : []
)
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

    <template v-if="isResultArray">
      <QuestionCard
        v-for="question in resultQuestions"
        :key="question.id"
        :questionId="question.id"
        :question="question.attributes"
      />
    </template>
    <template v-else>
      <div
        class="bg-fiord-900 w-full h-fit p-3 rounded-xl border border-fiord-700 text-base"
      >
        {{ result }}
      </div>
    </template>
  </div>
</template>
