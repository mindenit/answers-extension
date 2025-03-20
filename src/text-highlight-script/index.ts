import { useSearchQuestion } from "@/composables/useSearchQuestion";
import { useSidebar } from "@/composables/useSidebar";

const searchQuestion = useSearchQuestion();
const sidebar = useSidebar();
  const createButton = () => {
    const button = document.createElement('div');
    button.className = 'highlight-search-button';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
    button.style.cssText = `
      position: absolute;
      width: 32px;
      height: 32px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999999;
      display: none;
    `;
    document.body.appendChild(button);
    return button;
  };

  const button = createButton();
  let selectedText = '';

  document.addEventListener('mouseup', (event) => {
    const selection = window.getSelection();
    
    if(selection) {
      const currentSelection = selection.toString().trim();
      
      if (currentSelection && selection.rangeCount > 0) {
        // Update the stored selection immediately when user selects text
        selectedText = currentSelection;
        
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        button.style.left = `${rect.right}px`;
        button.style.top = `${window.scrollY + rect.top - 40}px`;
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    }
  });
  
  button.addEventListener('click', async () => {
    console.log("Selection text:", selectedText);
    if (selectedText) {
      searchQuestion.setQuestion(selectedText);
      sidebar.showSidebar();
    }
  });
