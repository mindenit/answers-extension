import { useBrowserLocalStorage } from "./useBrowserStorage"
import { computed } from 'vue'

export function useUpdatePage() {
  const { data: showUpdatePage } = useBrowserLocalStorage<boolean>("showUpdatePage", true)
  
  const isUpdate = computed(() => showUpdatePage.value)
  
  const setShowUpdatePage = (value: boolean) => {
    showUpdatePage.value = value
  }

  return {
    isUpdate,
    setShowUpdatePage
  }
}