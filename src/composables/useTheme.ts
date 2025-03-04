import { useDark, useToggle } from '@vueuse/core'
import { useBrowserLocalStorage } from './useBrowserStorage'
import type { BasicColorSchema } from '@vueuse/core'

export function useTheme() {
  const { data: colorSchema } = useBrowserLocalStorage<BasicColorSchema>('mode', 'auto')

 
  const isDark = useDark({
    initialValue: colorSchema.value,
    onChanged(isDark, defaultHandler, mode) {
      if (colorSchema.value !== mode) {
        colorSchema.value = mode
      }
      defaultHandler(mode)

      document.body.setAttribute('data-theme', mode)
    },
  })

  // Функція для перемикання теми
  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
}