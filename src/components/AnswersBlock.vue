<script setup lang="ts">
    import { useAnswerStore } from '@/stores/answer.store'

    const answerStore = useAnswerStore()

    const { questionWithAnswers } = storeToRefs(answerStore)
</script>

<template>
    
</template>