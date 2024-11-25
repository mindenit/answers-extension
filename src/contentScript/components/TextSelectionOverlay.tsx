import React, { useRef, useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { SelectionIcon } from './SelectionIcon'
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

  const {
    data: allQuestions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['questions'],
    queryFn: ApiQuestions.get,
    staleTime: Infinity,
  })

  const questionMutation = useMutation({
    mutationFn: async (text: string) => {
      if (chrome?.runtime?.sendMessage && allQuestions) {
        const response = await chrome.runtime.sendMessage({
          type: 'FIND_QUESTIONS',
          questions: allQuestions,
          pattern: text,
        })

        if (response.type === 'NOT FOUND') {
          console.log('NOT FOUND')

          return [
            {
              id: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              name: selectedText,
              answer: 'Відповідь не знайдено😕',
              isVerified: false,
              testId: 0,
            },
          ]
        }

        if(response.questions.length > 1) {
          chrome.storage.sync.set({ answers: response.questions })
          chrome.runtime.sendMessage({ type: 'OPEN_SIDEBAR' });
        }

        return response.questions
      }
      return []
    },
    onSuccess: (data) => {
      setQuestions(data)
      setIsModalOpen(true)
    },
    onError: (error) => {
      console.error('Error in question mutation:', error)
      if (selectedText) {
        setQuestions([
          {
            id: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            name: selectedText,
            answer: 'Відповідь не знайдено😕',
            isVerified: false,
            testId: 0,
          },
        ])
        setIsModalOpen(true)
      }
    },
  })

  const handleIconClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation() // Prevent event bubbling

      if (selectedText) {
        const clickX = e.clientX + window.scrollX
        const clickY = e.clientY + window.scrollY

        setModalPosition({ x: clickX, y: clickY })
        questionMutation.mutate(selectedText)
      }
    },
    [selectedText, questionMutation],
  )

  if (!selectedText || !selectionPosition) {
    return null
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
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
