import React, { useRef, useCallback, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { SelectionIcon } from './ui/SelectionIcon'
import { Modal } from './Modal'
import { useTextSelection } from '../hooks/useTextSelection'
import { ApiQuestions } from '../requests/Questions'

interface TextSelectionOverlayProps {
  iconLogoPath: string
}

export const TextSelectionOverlay: React.FC<TextSelectionOverlayProps> = ({ iconLogoPath }) => {
  const { selectedText, selectionPosition } = useTextSelection()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [modalPosition, setModalPosition] = React.useState({ x: 0, y: 0 })
  const iconRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [questions, setQuestions] = React.useState<ApiQuestions.IResponse[]>([])
  
  const notFound = (text: string): ApiQuestions.IResponse[] => {
    return [{
      id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: text,
      answer: 'Відповідь не знайдено😕',
      isVerified: false,
      testId: 0
    }]
  }

  const handleClose = useCallback(() => {
    setIsModalOpen(false)
    setQuestions([])
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClose])

  const searchMutation = useMutation<ApiQuestions.IResponse[], Error, string>({
    mutationFn: async (text: string) => {
        const response = await ApiQuestions.search({ query: text })
        const questionsArray = Array.isArray(response.data) 
          ? response.data 
          : response.data 
            ? [response.data]
            : []

        if (questionsArray.length === 0) {
          return notFound(text)
        }

        if (chrome?.storage?.sync && questionsArray.length > 1) {
          chrome.storage.sync.set({ answers: questionsArray })
          chrome.runtime.sendMessage({ type: 'OPEN_SIDEBAR' })
        }
        
        return questionsArray
    },
    onSuccess: (data) => {
      setQuestions(data)
      setIsModalOpen(true)
    },
    onError: (error) => {
      console.error('Error in search mutation:', error)
      if (selectedText) {
        setQuestions(notFound(selectedText))
        setIsModalOpen(true)
      }
    }
  })

  const handleIconClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()

      if (selectedText) {
        const clickX = e.clientX + window.scrollX
        const clickY = e.clientY + window.scrollY

        setModalPosition({ x: clickX, y: clickY })
        searchMutation.mutate(selectedText)
      }
    },
    [selectedText, searchMutation]
  )

  if (!selectedText || !selectionPosition) {
    return null
  }

  return (
    <>
      <SelectionIcon
        ref={iconRef}
        iconLogoPath={iconLogoPath}
        position={selectionPosition}
        onIconClick={handleIconClick}
      />
      {isModalOpen && questions.length > 0 && (
        <div ref={modalRef}>
          <Modal
            isVerified={questions[0].isVerified}
            title={questions[0].name}
            answer={questions[0].answer}
            id={questions[0].testId}
            x={modalPosition.x - 20}
            y={modalPosition.y + 20.5}
            onClose={handleClose}
          />
        </div>
      )}
    </>
  )
}