import { useBrowserLocalStorage } from './useBrowserStorage'
import { Answer } from '@/services/api/answers.api'

export interface Question {
  question: string
}

export function useSearchQuestion() {
  const { data: answers } = useBrowserLocalStorage<Question>('answers', {
    question: ""
  })

  const setQuestion = (question: string) => {
    answers.value.question = question
  }

  return {
    data: answers,
    setQuestion
  }
}