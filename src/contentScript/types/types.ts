export interface IWindow {
  open: (text: string, x: number, y: number) => void;
  close: () => void;
}
export interface IExtensionMessage {
  action: string;
  text: string;
}
  
export interface SelectionPosition {
  x: number;
  y: number;
}

export interface Answer {
  id: number;
  text: string;
  answer: string;
}
export interface Question {
  id: number;
  title: string;
  answer: string;
}