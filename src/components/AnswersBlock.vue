<script setup lang="ts">
import LoadingSpinner from './state/LoadingSpinner.vue';
import DisplayError from './state/DisplayError.vue';

const answerStore = useAnswerStore();
const isLoading = computed(() => answerStore.answers.isLoading);
const error = computed(() => answerStore.answers.error);
const answers = computed(() => answerStore.answers.data);
</script>

<template>
    <main class="w-full lg:pl-2 lg:border-l border-fiord-300 dark:border-fiord-700">
        <div v-if="isLoading"><LoadingSpinner :loading="isLoading" /></div>
        <div v-else-if="error"><DisplayError :error="error.message" /></div>
        <div v-else-if="!answerStore.answers || !answerStore.question" class="p-4 text-center text-gray-600 dark:text-gray-400">
            Виділіть питання і ми спробуємо знайти на нього відповідь!
        </div>
        <div v-else-if="answers && answers.length === 0" class="p-4 text-center text-gray-600 dark:text-gray-400">
            Вибачте, але на питання "{{ answerStore.question.question }}" відповіді не знайдено.
        </div>
        <div v-else class="flex flex-col gap-2">
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