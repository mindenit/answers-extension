import "./index.scss"
import { useSidebar } from "@/composables/useSidebar"
import { watchEffect } from "vue"

const { showSidebar } = useSidebar()

const src = chrome.runtime.getURL("src/ui/content-script-iframe/index.html")
// const container = document.createElement("div");
// container.className="crx-container";

// const draggable = document.createElement("div");
// draggable.className="draggable"; 
// draggable.textContent = "Drag"

const iframe = document.createElement("iframe")
iframe.className = "crx-iframe"
iframe.src = src

// container.append(draggable);
// container.append(iframe);

if (iframe) {
  document.body?.append(iframe)

  iframe.style.display = showSidebar.value ? "flex" : "none"

  watchEffect(() => {
    iframe.style.display = showSidebar.value ? "flex" : "none"
  })

  // WORST!!! MAKE BETTER!!!!
  function dragElement(element: Element) {
    let posX = 0, posY = 0, startX = 0, startY = 0;
    let isDragging = false;

    element.addEventListener('mousedown', startDragging);
    element.addEventListener('touchstart', startDragging, { passive: false });

    function startDragging(e: any) {
        e.preventDefault();
        e.stopPropagation(); 

        if (e.type === 'touchstart') {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        } else {
            startX = e.clientX;
            startY = e.clientY;
        }

        isDragging = true; // Починаємо перетягування
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('touchend', stopDragging);

        window.addEventListener('blur', stopDragging);
    }

    function drag(e) {
        if (!isDragging) return; 

        e.preventDefault();
        e.stopPropagation();

        let currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        let currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

        posX = currentX - startX;
        posY = currentY - startY;
        startX = currentX;
        startY = currentY;

        let newTop = (parseFloat(element.style.top) || 0) + posY;
        let newLeft = (parseFloat(element.style.left) || 0) + posX;

        newTop = Math.max(0, Math.min(newTop, window.innerHeight - element.offsetHeight));
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - element.offsetWidth));

        element.style.top = newTop + 'px';
        element.style.left = newLeft + 'px';
    }

    function stopDragging(e) {
        if (!isDragging) return;

        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', stopDragging);
        document.removeEventListener('touchend', stopDragging);
        window.removeEventListener('blur', stopDragging);
    }
  }
  
  dragElement(iframe);
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("hello world from content-script")