<script setup lang="ts">
import { useMarkdown } from '@/composables/useMarkdown';
import { Text } from '@mindenit/ui';

const { markdown } = useMarkdown();

const nameParsed = computed(() => markdown.render(props.name));
const answerParsed = computed(() => {
  const answer = props.answer.replace(/\n/g, '<br>');
  return markdown.render(answer);
});


const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },    
    updatedAt: {
        type: Date,
        required: true
    },    
    name: {
        type: String,
        required: true
    },    
    answer: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    testId: {
        type: Number,
        required: true
    },
})
</script>

<template>
    <div class="flex flex-col dark:bg-fiord-900 bg-fiord-50 h-fit p-3 rounded-xl border border-fiord-300 dark:border-fiord-700 w-full">
        <div class="flex items-center gap-1 justify-between m-0">
            <Text size="small" class="text-[#96a2b6] font-bold not-prose">ID Питання: {{ id }}</Text>
        </div>
        
        <div class="flex justify-between items-center p-0 my-0">
            <Text size="paragraph" class="text-prima not-prose" v-html="nameParsed"></Text>
        </div>
        <!-- Відображення відповіді -->
        <div class="flex items-start gap-2 p-2 dark:bg-christi-950 bg-christi-600 rounded-lg flex-col sm:flex-row text-white">
            <div class="flex items-center gap-2">
                <!-- Іконка верифікації -->
                <div v-if="isVerified" class="relative inline-block group">
                    <svg
                        class="w-4 h-4 fill-[#92c353]"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm45.7 85.9l-58.6 56a8.1 8.1 0 0 1-5.6 2.1a8.3 8.3 0 0 1-5.6-2.1l-29.3-28a8 8 0 1 1 11.2-11.4l23.7 22.5l53-50.7a8 8 0 0 1 11.2 11.6Z"
                        />
                    </svg>
                </div>
                
                <div class="not-prose" v-html="answerParsed"></div>
            </div>
        </div>
    </div>
</template>
