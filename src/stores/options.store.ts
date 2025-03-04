import { useContentScriptIframeSize } from "@/composables/useContentScriptIframeSize"; 

export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()
  const { showUpdatePage, toggleUpdatePage}  = useUpdatePage();
  const { contentScriptIframeSize, setIframeHeight, setIframeWidth } = useContentScriptIframeSize()

  return {
    isDark,
    toggleDark,
    showUpdatePage,
    toggleUpdatePage,
    contentScriptIframeSize,
    setIframeHeight,
    setIframeWidth
  }
})
