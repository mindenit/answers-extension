import { ApiQuestions } from '../contentScript/requests/Questions'

console.log('background is running')

let windowId: any = 0

chrome.windows.getCurrent((window) => {
  windowId = window.id // Ensure a valid windowId at the start
})

chrome.tabs.onActivated.addListener((activeInfo) => {
  windowId = activeInfo.windowId
})

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: 'installation.html' })
  }

  // if(details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
  //   chrome.tabs.create({url: 'update.html'})
  // }
})

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

    sendResponse({ type: 'SUCCESS', message: 'Питання знайдено.', questions: foundQuestions })
    return true
  }

  if (request.type === 'OPEN_SIDEBAR') {
    if (!chrome.sidePanel) {
      console.error('SidePanel API is not available in this version of Chrome.')
      return
    }

    chrome.sidePanel
      .open({ windowId })
      .then(() => console.log('SidePanel opened'))
      .catch((error) => console.error('Failed to open SidePanel:', error))
  }
})
