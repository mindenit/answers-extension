<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useAnswerStore } from '@/stores/answer.store';
  import { searchQuestion } from '@/services/api/answers.api';
  import { Icon } from '@iconify/vue/dist/iconify.js';

  const answerStore = useAnswerStore();
  const isVisible = ref(false);
  const selectedText = ref('');
  const buttonStyle = ref({
    left: '0',
    top: '0',
  });
  
  const updateButtonPosition = () => {
    const selection = window.getSelection();
    selectedText.value = selection.toString().trim();
  
    if (selectedText.value && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
  
      buttonStyle.value = {
        left: `${rect.right}px`,
        top: `${window.scrollY + rect.top - 40}px`,
      };
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  };
  
  const handleButtonClick = async () => {
    if (selectedText.value) {
      const answers = await searchQuestion(selectedText.value);
      answerStore.setQuestion(selectedText.value);
      answerStore.setAnswers(answers);
    }
  };
  
  onMounted(() => {
    document.addEventListener('mouseup', updateButtonPosition);
  });
  
  onUnmounted(() => {
    document.removeEventListener('mouseup', updateButtonPosition);
  });
  </script>
  
  <style scoped>
  .highlight-search-button {
    position: absolute;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999999;
  }
  </style>

<template>
  <div
    v-if="isVisible"
    class="highlight-search-button"
    @click="handleButtonClick"
    :style="buttonStyle"
  >
    <Icon icon="ph:eye" width="20" />
  </div>
</template>