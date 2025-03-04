export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()
  const { showUpdatePage, toggleUpdatePage}  = useUpdatePage();
  const { data: contentScriptIframeSize } = useBrowserSyncStorage<{
    width: number
    height: number
  }>("content-script-iframe-size", {
    width: 420,
    height: 340
  })

  // const { data: others } = useBrowserLocalStorage<{
  //   awesome: boolean
  //   counter: number
  // }>("options", {
  //   awesome: true,
  //   counter: 0,
  // })

  return {
    isDark,
    toggleDark,
    showUpdatePage,
    toggleUpdatePage,
    contentScriptIframeSize,
  }
})
