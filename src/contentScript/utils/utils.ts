export function generateUniqueId(prefix: string = 'el'): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}-${Date.now().toString(36)}`;
  }
  

  export function createUniqueElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    classNamePrefix: string = 'el'
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(tagName);
    
    const uniqueId = generateUniqueId(classNamePrefix);
    element.id = uniqueId;
    element.className = `${classNamePrefix}-${uniqueId}`;
    
    return element;
  }
  

  export function applyStyles(element: HTMLElement, styles: Record<string, string>): void {
    Object.assign(element.style, styles);
  }
  


