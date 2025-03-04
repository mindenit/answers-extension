<script setup lang="ts">
    import { useFetchAnswers } from '@/composables/useFetchAnswers';
import LoadingSpinner from './state/LoadingSpinner.vue';

    const { data: answers, isLoading, error } = useFetchAnswers();
</script>

<template>
    <main class="flex flex-col gap-2 w-full lg:pl-2 lg:border-l border-fiord-300 dark:border-fiord-700">
        <div v-if="isLoading"><LoadingSpinner :loading="isLoading" /></div>
        <div v-else-if="error"><DisplayError :error="error.message" /></div>
        <div v-else>
            <AnswerItem
                v-for="answer in answers"
                :key="answer.id"
                :id="answer.id"
                :createdAt="new Date(answer.createdAt)"
                :updatedAt="new Date(answer.updatedAt)"
                :name="answer.name"
                :answer="answer.answer"
                :isVerified="answer.isVerified"
                :testId="answer.testId"
            />
        </div>
    </main>
</template>