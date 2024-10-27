import { IWindow } from "./interfaces/window-bridge";

export class WindowTextArea implements IWindow {
    private modal: HTMLElement | null = null;
  
    constructor() {}
  
    private createWindow(text: string, x: number = 0, y: number = 0) {
      this.modal = document.createElement('div');
      this.modal.setAttribute('readonly', 'true');
      this.modal.style.resize = 'none';
      this.modal.style.cssText = `
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, .5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        accent-color: #6368f2;
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        background-color: #111628;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #344050;
        box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
        width: 500px;
        z-index: 9999;
        display: grid;
        grid-template-areas: 
          "title close"
          "question question"
          "answer answer"
          "id id";
        grid-template-columns: 1fr auto;
        row-gap: 10px;
      `;
  
      // Title
      const title = document.createElement('h2');
      title.innerText = text;
      title.style.cssText = `
        grid-area: title;
        margin: 0;
        font-size: 18px;
        color: rgb(255 255 255);
      `;

      // Check circle svg
      const checkCircleSvg = `
      <svg width="16" height="16" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="size-4">
        <path fill="#92C353" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm45.7 85.9l-58.6 56a8.1 8.1 0 0 1-5.6 2.1a8.3 8.3 0 0 1-5.6-2.1l-29.3-28a8 8 0 1 1 11.2-11.4l23.7 22.5l53-50.7a8 8 0 0 1 11.2 11.6Z"/>
      </svg>`;

      // Answer container
      const answerContainer = document.createElement('div');
      answerContainer.innerHTML = `<div style="display: flex; align-items: center; gap: 8px;"><span>${checkCircleSvg}</span><span>Doggo! Наша команда любить його😉!</span></div>`;
      answerContainer.style.cssText = `
        grid-area: answer;
        accent-color: #344050;
        color: #fff;
        outline: none;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, .5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        width: 100%;
        padding: 10px;
        background-color: #18260d;
        border-radius: 4px;
        font-size: 14px;
      `;

      // ID section
      const idContainer = document.createElement('div');
      idContainer.style.cssText = `
        grid-area: id;
        color: #fff;
        font-size: 14px;
        text-align: right;
        margin-top: 5px;
      `;
      idContainer.innerHTML = '<strong>ID Питання: </strong>284';
  
      // Close button
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&#10005;';
      closeButton.style.cssText = `
        grid-area: close;
        color: white;
        width: 24px;
        height: 24px;
        border: none;
        background: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        padding: 0;
        line-height: 1;
        justify-self: end;
      `;
      
      closeButton.addEventListener('mouseover', () => {
        closeButton.style.transform = 'rotate(90deg)';
      });
      
      closeButton.addEventListener('mouseout', () => {
        closeButton.style.transform = 'rotate(0deg)';
      });
      
      closeButton.addEventListener('click', this.close.bind(this));

      this.modal.appendChild(title);
      this.modal.appendChild(closeButton);
      this.modal.appendChild(answerContainer);
      this.modal.appendChild(idContainer);
      
      document.body.appendChild(this.modal);
    }
  
    public open(text: string = '', x: number, y: number): void {
      if (!this.modal) {
        this.createWindow(text, x, y);
      }
    }
  
    public close(): void {
      if (this.modal) {
        document.body.removeChild(this.modal);
        this.modal = null;
      }
    }
}