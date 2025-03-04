import { useQuery } from "@pinia/colada";
import { searchQuestion } from "@/services/api/answers.api";
import { useSearchQuestion } from "@/composables/useSearchQuestion";
import { computed } from "vue";

export const useFetchAnswers = () => {
  const { data: questionData } = useSearchQuestion();

  return useQuery({
    key: () => ["search-question", questionData.value.question],
    query: async () => {
      const question = questionData.value.question;
      
      if (!question || question.trim() === '') {
        return [];
      }
      
      const fetchedAnswers = await searchQuestion(question);
      return fetchedAnswers || [];
    },
    enabled: computed(() => {
      const question = questionData.value.question;
      return !!question && question.trim() !== '';
    })
  });
};