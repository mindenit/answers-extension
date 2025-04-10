import { useBrowserLocalStorage } from "./useBrowserStorage"

export function useUpdatePage() {
  const defaultUpdatePage = true
  const updatePageKey = "show-update-page"

  const { data: showUpdatePage } = useBrowserLocalStorage<boolean>(updatePageKey, defaultUpdatePage)

  const toggleUpdatePage = () => {
    showUpdatePage.value = !showUpdatePage.value
  }

  return {
    showUpdatePage,
    toggleUpdatePage
  }
}