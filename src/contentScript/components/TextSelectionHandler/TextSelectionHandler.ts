import { IExtensionMessage } from "../../interfaces/extension-message.interface";
import { ISelectionIconElement } from "../../interfaces/selection-icon-element.interface";
import { IWindow } from "../Window/interfaces/window-bridge";
import { createUniqueElement, applyStyles } from "../../utils/utils";

export class TextSelectionHandler {
  private selectionIcon: ISelectionIconElement | null = null;
  private windowTextArea: IWindow | null = null;
  private iconLogoPath: string = "";

  constructor(window: IWindow, iconLogoPath: string) {
    this.windowTextArea = window;
    this.iconLogoPath = iconLogoPath;
    this.initializeEventListeners();
  }

  private createSelectionIcon(): ISelectionIconElement {
    const icon = createUniqueElement('div', 'selection-icon') as ISelectionIconElement;

    const imgElement: HTMLImageElement = createUniqueElement('img', 'selection-icon-img');
    imgElement.src = this.iconLogoPath;
    
    // Застосування стилів
    applyStyles(imgElement, {
      width: '20px',
      height: '20px',
    });

    icon.appendChild(imgElement);

    applyStyles(icon, {
      position: 'absolute',
      cursor: 'pointer',
      zIndex: '9999',
      background: 'white',
      borderRadius: '50%',
      padding: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      transition: 'transform 0.2s',
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    });

    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.1)';
    });

    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });

    icon.addEventListener('click', (e: MouseEvent) => this.handleIconClick(e));

    icon.show = (x: number, y: number): void => {
      icon.style.top = `${y}px`;
      icon.style.left = `${x}px`;
      icon.style.display = 'flex';
    };

    icon.hide = (): void => {
      icon.style.display = 'none';
    };

    document.body.appendChild(icon);
    return icon;
  }
  
    private handleIconClick(event: MouseEvent): void {
      const selectedText = window.getSelection()?.toString().trim();
      if (selectedText) {
        chrome.runtime.sendMessage<IExtensionMessage>({
          action: 'processSelectedText',
          text: selectedText
        });


        // This is shit!!! please rewrite!!!
        const clickX = event.clientX;
        const clickY = event.clientY;

        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        const absoluteX = clickX + scrollX;
        const absoluteY = clickY + scrollY;

        this.windowTextArea?.open(selectedText, absoluteX, absoluteY);
      }
    }
  
    private handleTextSelection(e: MouseEvent): void {
      const selection = window.getSelection();
      const selectedText = selection?.toString().trim();
      
      if (selectedText && selectedText.length > 0) {
        if (!this.selectionIcon) {
          this.selectionIcon = this.createSelectionIcon();
        }
        
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        
        if (rect) {
          const iconX = window.scrollX + rect.left + rect.width / 2;
          const iconY = window.scrollY + rect.bottom + 5;
          this.selectionIcon.show(iconX, iconY);
        }
      } else if (this.selectionIcon) {
        this.selectionIcon.hide();
      }
    }
  
    private handleClickOutside(e: MouseEvent): void {
      if (this.selectionIcon && !this.selectionIcon.contains(e.target as Node)) {
        this.selectionIcon.hide();
      }
    }
  
    private initializeEventListeners(): void {
      document.addEventListener('mouseup', this.handleTextSelection.bind(this));
      document.addEventListener('mousedown', this.handleClickOutside.bind(this));
      window.addEventListener('beforeunload', () => {
        if (this.selectionIcon && this.selectionIcon.parentNode) {
          this.selectionIcon.parentNode.removeChild(this.selectionIcon);
        }
      });
    }
  }