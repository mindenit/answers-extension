import React, { useEffect, useState } from 'react'
import { TextSelectionOverlay } from './components/TextSelectionOverlay'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
})

export const App: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string>('')

  useEffect(() => {
    if (chrome?.runtime?.getURL) {
      const logoPath = chrome.runtime.getURL('/img/icon-72.png')
      setLogoUrl(logoPath)
    } else {
      setLogoUrl('/img/icon-72.png')
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <TextSelectionOverlay iconLogoPath={logoUrl} />
    </QueryClientProvider>
  )
}
