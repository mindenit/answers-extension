import { useState, useEffect, useCallback } from 'react';
import { SelectionPosition } from '../types/types';

export const useTextSelection = () => {
  const [selectedText, setSelectedText] = useState<string>('');
  const [selectionPosition, setSelectionPosition] = useState<SelectionPosition | null>(null);

  const handleTextSelection = useCallback((e: MouseEvent) => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    
    if (text && text.length > 4) {
      setSelectedText(text);
      
      const range = selection?.getRangeAt(0);
      const rect = range?.getBoundingClientRect();
      
      if (rect) {
        setSelectionPosition({
          x: window.scrollX + rect.left + rect.width / 2,
          y: window.scrollY + rect.bottom + 5
        });
      }
    } else {
      setSelectedText('');
      setSelectionPosition(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleTextSelection);
    return () => document.removeEventListener('mouseup', handleTextSelection);
  }, [handleTextSelection]);

  return { selectedText, selectionPosition };
};