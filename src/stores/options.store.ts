import { useContentScriptIframeSize } from "@/composables/useContentScriptIframeSize"; 
import { useStyles } from "@/composables/useStyles";

export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()
  const { showUpdatePage, toggleUpdatePage}  = useUpdatePage();
  const { contentScriptIframeSize, setIframeHeight, setIframeWidth } = useContentScriptIframeSize()
  const { styles, toggleStyles } = useStyles()

  return {
    isDark,
    toggleDark,
    showUpdatePage,
    toggleUpdatePage,
    contentScriptIframeSize,
    setIframeHeight,
    setIframeWidth,
    styles,
    toggleStyles
  }
})
