<script setup lang="ts">
import { Button } from '@mindenit/ui'
import { ref } from 'vue'

const textContainer = ref('')

const getSelectedText = async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id! },
        func: () => window.getSelection()?.toString() || ''
      },
      (injectionResults) => {
        if (injectionResults && injectionResults.length > 0) {
          const prompt =
            injectionResults[0].result || 'Виділіть питання на сторінці'
          textContainer.value = prompt
        } else {
          textContainer.value = 'Питання не виділено'
        }
      }
    )
  } catch (error) {
    console.error('Error executing script:', error)
    textContainer.value = 'Щось пішло не так...'
  }
}
</script>

<template>
  <div class="w-[400px] p-2 bg-fiord-900 text-white flex flex-col gap-2">
    <Button @click="getSelectedText">Пошук</Button>
    <div
      id="text-container"
      class="p-1 bg-fiord-800 border border-fiord-700 rounded-lg"
    >
      {{ textContainer }}
    </div>
  </div>
</template>
