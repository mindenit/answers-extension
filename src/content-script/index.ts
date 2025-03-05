import "./index.scss"
import { useSidebar } from "@/composables/useSidebar"
import { watchEffect } from "vue"
import { useContentScriptIframeSize } from "@/composables/useContentScriptIframeSize"
import { draggableElement } from "@/utils/ui-utils"

const { isShowSidebar } = useSidebar()
const { contentScriptIframeSize } = useContentScriptIframeSize();  

const src = chrome.runtime.getURL("src/ui/content-script-iframe/index.html")

const iframe = document.createElement("iframe")
iframe.className = "crx-iframe draggable"
iframe.src = src

if (iframe) {
  document.body?.append(iframe)

  iframe.style.display = isShowSidebar.value ? "flex" : "none"

  watchEffect(() => {
    iframe.style.display = isShowSidebar.value ? "flex" : "none"
    iframe.style.width = `${contentScriptIframeSize.value.width}px`;
    iframe.style.height = `${contentScriptIframeSize.value.height}px`;
  })

  draggableElement(iframe);
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("hello world from content-script")