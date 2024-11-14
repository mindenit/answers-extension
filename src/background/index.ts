import { ApiQuestions } from '../contentScript/requests/Questions'

console.log('background is running');

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error('SidePanel setup error:', error));

let windowId: any = 0;

chrome.windows.getCurrent((window) => {
  windowId = window.id; // Ensure a valid windowId at the start
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  windowId = activeInfo.windowId;
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: 'installation.html' });
  }
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'FIND_QUESTIONS') {
    const {
      questions,
      pattern,
    }: {
      questions: ApiQuestions.IResponse[]
      pattern: string
    } = request

    const foundQuestions = []
    let index = 0

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].name.includes(pattern)) {
        foundQuestions[index] = questions[i]
        index++
      }
    }

    if (foundQuestions.length === 0) {
      console.log(foundQuestions)
      sendResponse({
        type: 'NOT FOUND',
        message: 'Питання не знайдено.',
        questions: foundQuestions,
      })
      return true
    }

    foundQuestions.unshift({
      answer: "фізичної підготовленості людини до життя;",
      createdAt:"2024-10-23T21:57:14.134Z",
      id: 1,
      isVerified: true,
      name: "Перша допомога при забитті:",
      testId: 1,
      updatedAt: "2024-10-23T21:57:14.134Z"
    })
    console.log(foundQuestions)

    sendResponse({ type: 'SUCCESS', message: 'Питання знайдено.', questions: foundQuestions })
    return true
  }

  if (request.type === 'OPEN_SIDEBAR') {
    if (!chrome.sidePanel) {
      console.error('SidePanel API is not available in this version of Chrome.');
      return;
    }

    chrome.sidePanel.open({ windowId })
      .then(() => console.log('SidePanel opened'))
      .catch((error) => console.error('Failed to open SidePanel:', error));
  }
})
