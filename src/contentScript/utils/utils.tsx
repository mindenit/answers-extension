import { InlineMath, BlockMath } from 'react-katex';

export const renderMathContent = (text: string) => {
  if(!text) {
    return null;
  }  
  
  if (!text.includes('$$')) {
      return <span>{text}</span>;
    }
  
    const parts = text.split(/(\$\$.*?\$\$)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const formula = part.slice(2, -2);
        return <BlockMath key={index}>{formula}</BlockMath>;
      }
      return <span key={index}>{part}</span>;
    });
  };