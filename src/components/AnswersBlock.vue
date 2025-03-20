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
    <!-- Стан завантаження -->
    <div v-if="isLoading"><LoadingSpinner :loading="isLoading" /></div>

    <!-- Помилка -->
    <div v-else-if="error"><DisplayError :error="error.message" /></div>

    <!-- Вітальне повідомлення при відсутності питання чи відповідей -->
    <div v-else-if="!answerStore.answers || !answerStore.question.question" 
         class="p-4 text-center text-gray-600 dark:text-gray-400">
      <h2 class="text-lg font-semibold">Ласкаво просимо!</h2>
      <p>Виділіть питання на сторінці, і ми спробуємо знайти на нього відповідь!</p>
    </div>

    <!-- Немає відповідей на задане питання -->
    <div v-else-if="answers && answers.length === 0" 
         class="p-4 text-center text-gray-600 dark:text-gray-400">
      Вибачте, але на питання "{{ answerStore.question.question }}" відповіді не знайдено.
    </div>

    <!-- Список відповідей -->
    <div v-else-if="answers && answers.length > 0" class="flex flex-col gap-2">
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

    <!-- Заглушка, якщо всі умови пішли нахєр -->
    <div v-else class="p-4 text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900 rounded-lg">
      <h2 class="text-lg font-semibold">Щось пішло не так!</h2>
      <p>Схоже, додаток зламався. Спробуйте перезавантажити сторінку або виділити питання ще раз.</p>
      <p>Debug info: answers = {{ answers }}, question = {{ answerStore.question }}</p>
    </div>
  </main>
</template>