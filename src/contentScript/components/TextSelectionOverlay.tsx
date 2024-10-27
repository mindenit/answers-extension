import React, { useRef, useCallback } from 'react';
import { SelectionIcon } from './SelectionIcon';
import { Modal } from './Modal';
import { useTextSelection } from '../hooks/useTextSelection';
import { useClickOutside } from '../hooks/useClickOutside';
import { IExtensionMessage } from '../types/types';

interface TextSelectionOverlayProps {
  iconLogoPath: string;
}

export const TextSelectionOverlay: React.FC<TextSelectionOverlayProps> = ({ iconLogoPath }) => {
  const { selectedText, selectionPosition } = useTextSelection();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalPosition, setModalPosition] = React.useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  const handleIconClick = useCallback((e: React.MouseEvent) => {
    if (selectedText) {
      // Send message to Chrome extension
      chrome.runtime.sendMessage<IExtensionMessage>({
        action: 'processSelectedText',
        text: selectedText
      });

      const clickX = e.clientX + (window.pageXOffset || document.documentElement.scrollLeft);
      const clickY = e.clientY + (window.pageYOffset || document.documentElement.scrollTop);
      
      setModalPosition({ x: clickX, y: clickY });
      setIsModalOpen(true);
    }
  }, [selectedText]);

  useClickOutside(iconRef, () => {
    setIsModalOpen(false);
  });

  if (!selectedText || !selectionPosition) {
    return null;
  }

  return (
    <>
      <SelectionIcon
        ref={iconRef}
        iconLogoPath={iconLogoPath}
        position={selectionPosition}
        onIconClick={handleIconClick}
      />
      {isModalOpen && (
        <Modal
          title={selectedText}
          answer="Doggo! Наша команда любить його😉!"
          id={284}
          x={modalPosition.x-20}
          y={modalPosition.y+20.5}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};