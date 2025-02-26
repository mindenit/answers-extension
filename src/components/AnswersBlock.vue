<script setup lang="ts">
    import { useAnswerStore } from '@/stores/answer.store'

    const answerStore = useAnswerStore()

    const { questionWithAnswers } = storeToRefs(answerStore)
</script>

<template>
    <main class="flex flex-col gap-2 w-full lg:pl-2 lg:border-l border-fiord-300 dark:border-fiord-700">
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \frac{hv}{c}'"            
            :isVerified="true"
            :testId="456"
        />
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \\(E=mc^2\\)'"
            :isVerified="true"
            :testId="456"
        />
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \\(E=mc^2\\)'"
            :isVerified="true"
            :testId="456"
        />
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \\(E=mc^2\\)'"
            :isVerified="true"
            :testId="456"
        />
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \\(E=mc^2\\)'"
            :isVerified="true"
            :testId="456"
        />
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \\(E=mc^2\\)'"
            :isVerified="true"
            :testId="456"
        />
        <AnswerItem 
            :id="123"
            :createdAt="new Date()"
            :updatedAt="new Date()"
            :name="'Питання про математичний закон'"
            :answer="'Відповідь містить формулу: \\(E=mc^2\\)'"
            :isVerified="true"
            :testId="456"
        />
    </main>
</template>