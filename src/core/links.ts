import { Environment } from './enviroment'

export namespace Links {
  export const llm = Environment.llmDomain
  export const api = `${Environment.apiDomain}/api`
}
