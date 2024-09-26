export interface Test {
  data: {
    id: number
    attributes: {
      verified: boolean
      name: string
    }
  }
}

export interface QuestionAttributes {
  name: string
  answer: string
  verified: boolean
  test?: Test
}

export interface Question {
  id: number
  attributes: QuestionAttributes
}

export interface ApiResponse {
  data: Question[]
}
