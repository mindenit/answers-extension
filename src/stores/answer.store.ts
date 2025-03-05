import { defineStore } from 'pinia'
import { Answer } from '@/services/api/answers.api'

export interface Answers {
    question: string
    answers: Answer[]
}

export const useAnswerStore = defineStore("answers", () => {
    const { data: question  } = useSearchQuestion()
    const { data: answers } = useFetchAnswers()

    return {
        question,
        answers
    };
})