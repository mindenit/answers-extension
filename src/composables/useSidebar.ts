import { useBrowserLocalStorage } from "./useBrowserStorage"

export function useSidebar() {
  const defaultSidebar = false
  const showSidebarKey = "show-sidebar"

  const { data: isShowSidebar } = useBrowserLocalStorage<boolean>(showSidebarKey, defaultSidebar)

  const toggleSidebar = () => {
    isShowSidebar.value = !isShowSidebar.value
  }

  const showSidebar = () => {
    isShowSidebar.value = true;
  }

  return {
    isShowSidebar,
    showSidebar,
    toggleSidebar
  }
}