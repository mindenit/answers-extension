export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()
  const { showUpdatePage, toggleUpdatePage}  = useUpdatePage();
  const { data: profile } = useBrowserSyncStorage<{
    name: string
    age: number
  }>("profile", {
    name: "Mario",
    age: 24,
  })

  const { data: others } = useBrowserLocalStorage<{
    awesome: boolean
    counter: number
  }>("options", {
    awesome: true,
    counter: 0,
  })

  return {
    isDark,
    toggleDark,
    showUpdatePage,
    toggleUpdatePage,
    profile,
    others,
  }
})
