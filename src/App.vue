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
          textContainer.value =
            injectionResults[0].result || 'No text selected.'
        } else {
          textContainer.value = 'No text selected.'
        }
      }
    )
  } catch (error) {
    console.error('Error executing script:', error)
    textContainer.value = 'An error occurred.'
  }
}
</script>

<template>
  <div class="w-[300px]">
    <Button @click="getSelectedText">Пошук</Button>
    <div id="text-container">{{ textContainer }}</div>
  </div>
</template>
