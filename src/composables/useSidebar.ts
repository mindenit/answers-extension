import { useBrowserLocalStorage } from "./useBrowserStorage"

export function useSidebar() {
  const defaultSidebar = false
  const showSidebarKey = "show-sidebar"

  const { data: showSidebar } = useBrowserLocalStorage<boolean>(showSidebarKey, defaultSidebar)

  const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value
  }

  return {
    showSidebar,
    toggleSidebar
  }
}