import { useBrowserLocalStorage } from "./useBrowserStorage"

export function useStyles() {
  const defaultStyles = true
  const stylesKey = "nure-styles"

  const { data: styles } = useBrowserLocalStorage<boolean>(stylesKey, defaultStyles)

  const toggleStyles = () => {
    styles.value = !styles.value
  }

  return {
    styles,
    toggleStyles
  }
}