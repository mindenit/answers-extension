import { Links } from "../../core/links";
import axios from "axios";


export namespace ApiQuestions {
  const link = `https://answers.mindenit.org/api/questions`;

  export interface IResponse {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    answer: string;
    isVerified: boolean;
    testId: number;
  }

  export const get = async () => {
    return (await axios.get<Response>(link)).data;
  }
}
