<script lang="ts" setup>
import { QuestionAttributes } from '@/types'
import { Icon } from '@iconify/vue'
import { Text } from '@mindenit/ui'
import VerifiedBadge from './VerifiedBadge.vue'

interface Props {
  question: QuestionAttributes
  questionId: number
}

const props = defineProps<Props>()
console.log(props.question)
</script>
<template>
  <div
    class="flex flex-col bg-fiord-900 w-full h-fit p-3 rounded-xl border border-fiord-700 gap-2"
  >
    <div class="flex items-center gap-2">
      <Text size="subtitle" class="text-white"
        >ID Питання: {{ questionId }}
      </Text>
      <VerifiedBadge v-if="props.question.verified" />
    </div>
    <div class="flex items-center gap-2">
      <Text size="lead">{{ props.question.name }}</Text>
    </div>
    <div class="flex items-center gap-2 p-2 bg-christi-950 rounded-lg">
      <Icon icon="ph:check-circle-fill" class="text-christi-400" />
      <Text size="paragraph">{{ props.question.answer }}</Text>
    </div>
    <Text size="subtitle" v-if="props.question.test!.data !== null">
      <a
        :href="`https://localhost:3000/test/${props.question.test!.data.id}`"
        target="_blank"
        >Тест: {{ props.question.test!.data.attributes.name }}</a
      >
    </Text>
  </div>
</template>
