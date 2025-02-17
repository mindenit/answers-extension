export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()
  const { isUpdate, setShowUpdatePage}  = useUpdatePage();
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
    isUpdate,
    setShowUpdatePage,
    profile,
    others,
  }
})
