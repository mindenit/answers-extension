import { ApiQuestions } from "../contentScript/requests/Questions"

console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.type === 'FIND_QUESTIONS') {
    const { 
      questions,
      pattern
     } : { 
      questions: ApiQuestions.IResponse[],
      pattern: string
    } = request;

    const foundQuestions = [];
    let index = 0;

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].name.includes(pattern)) {
        foundQuestions[index] = questions[i];
        index++;
      }
    }


    if(foundQuestions.length === 0) {
      console.log(foundQuestions)
      sendResponse({ type: "ERROR", message: "Питання не знайдено.", questions: foundQuestions });
      return true;
    }
    console.log(foundQuestions)

    sendResponse({ type: "SUCCESS", message: "Питання знайдено.", questions: foundQuestions });
    return true;
  }
})