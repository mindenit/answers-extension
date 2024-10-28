import { ApiQuestions } from "../contentScript/requests/Questions"

console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.type === 'FIND_QUESTIONS') {
    const { questions } : { 
      questions: ApiQuestions.IResponse[]
    } = request;

    function findQuestions (pattern: string) {
      const foundQuestions = [];
      let index = 0;

      for (let i = 0; i < questions.length; i++) {
          if (questions[i].name.includes(pattern)) {
              foundQuestions[index] = questions[i];
              index++;
          }
      }

      return foundQuestions;
    }

    sendResponse({ questions: findQuestions(request.pattern) });
    return true;
  }
})