import { useQuery } from "@pinia/colada"
import { type Answer, searchQuestion } from "@/services/api/answers.api"

export const fetchAnswers = (question: string) => {
    return useQuery<Answer[]>({
        key: ["search-question", question],
        query: () => searchQuestion(question),
        enabled: !!question
    })
}
