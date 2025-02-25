import "./index.scss"
import { useSidebar } from "@/composables/useSidebar"
import { watchEffect } from "vue"

const { showSidebar } = useSidebar()

const src = chrome.runtime.getURL("src/ui/content-script-iframe/index.html")

const iframe = document.createElement("iframe")
iframe.className = "crx-iframe"
iframe.src = src

if (iframe) {
  document.body?.append(iframe)

  iframe.style.display = showSidebar.value ? "flex" : "none"

  watchEffect(() => {
    iframe.style.display = showSidebar.value ? "flex" : "none"
  })
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("hello world from content-script")