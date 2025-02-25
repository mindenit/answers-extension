import { defineStore } from 'pinia'
import { Answer } from '@/services/api/answers.api'

export const useAnswerStore = defineStore('answers', () => {
    const { data: questionWithAnswers  } = useBrowserSyncStorage<{
        question: string
        answers: Answer[]
    }>("answers", {
        question: "",
        answers: []
    })

    return {
        questionWithAnswers
    }
})