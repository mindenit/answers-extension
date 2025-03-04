export interface Size {
    width: number
    height: number
}

export function useContentScriptIframeSize() {
    const { data: contentScriptIframeSize } = useBrowserSyncStorage<Size>
    ("content-script-iframe-size", {
        width: 420,
        height: 340
    })

  const setIframeHeight = (height: number) => {
    contentScriptIframeSize.value.height = height
  }

  const setIframeWidth = (width: number) => {
    contentScriptIframeSize.value.width = width
  }

  return {
    contentScriptIframeSize,
    setIframeHeight,
    setIframeWidth
  }
}