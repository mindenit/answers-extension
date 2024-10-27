import { useState } from 'react';
import { IWindow } from '../types/types';

export const useModal = (): IWindow => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    text: '',
    x: 0,
    y: 0,
  });

  const open = (text: string, x: number, y: number) => {
    setModalProps({ text, x, y });
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    open,
    close,
  };
};