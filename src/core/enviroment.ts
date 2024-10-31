export namespace Environment {
  export const isDev = process.env.NODE_ENV === 'development'

  export const llmDomain = process.env.API_LLM || ''
  export const apiDomain = process.env.API_BACKEND || ''
}
