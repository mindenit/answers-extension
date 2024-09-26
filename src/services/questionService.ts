import { ApiResponse, Question } from '@/types'

const baseUrl = import.meta.env.VITE_API_URL
const requestUrl = `${baseUrl}/api/questions?populate=test`

export const fetchQuestions = async (
  selectedText: string
): Promise<Question[] | string> => {
  try {
    const url = `${requestUrl}&filters[name][$contains]=${selectedText}`
    const response = await fetch(url)
    const data: ApiResponse = await response.json()

    return data.data?.length ? data.data : 'Відповідь не знайдена'
  } catch (error) {
    console.error('Помилка в запиті до API:', error)
    return 'Щось пішло не так...'
  }
}
