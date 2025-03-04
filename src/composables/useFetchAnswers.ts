import { useQuery } from "@pinia/colada";
import { type Answer, searchQuestion } from "@/services/api/answers.api";
import { useSearchQuestion } from "@/composables/useSearchQuestion"; // Import the hook
import { computed } from "vue";

export const useFetchAnswers = () => {
  const { data } = useSearchQuestion();

  return useQuery({
    key: () => ["search-question", data.value.question],
    query: async () => {
      const answers = await searchQuestion(data.value.question);
      return answers;
    },
    enabled: computed(() => !!data.value.question)
  });
};