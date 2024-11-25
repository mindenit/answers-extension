import { Links } from '../../core/links'
import axios from 'axios'
import queryString from 'query-string'

export namespace ApiQuestions {
  const link = `https://answers.mindenit.org/api/questions`

  export interface IRequestSearch {
    query: string
  }
  export interface IResponse {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    answer: string
    isVerified: boolean
    testId: number
  }

  export const search = async (request: IRequestSearch) => {
    return await axios.get<IResponse[]>(`${link}/search?${queryString.stringify(request)}`)
  }

  export const get = async () => {
    return (await axios.get<IResponse[]>(link)).data
  }
}
