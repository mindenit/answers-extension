export function draggableElement(draggableElement: Element) {
    let isDragging = false;
    let startX: number, startY: number;
    let elementX: number, elementY: number;
    let offsetX: number, offsetY: number;

    draggableElement.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', dragElement);
    document.addEventListener('mouseup', stopDragging);

    function startDragging(e: MouseEvent) {
        // Запобігаємо множинним викликам
        if (isDragging) return;

        isDragging = true;
        
        // Обчислюємо точне зміщення курсору всередині елементу
        const rect = draggableElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        // Збережіть початкові координати курсору
        startX = e.clientX;
        startY = e.clientY;

        // Збережіть поточну позицію елементу
        elementX = rect.left;
        elementY = rect.top;

        // Додаємо глобальні обробники подій
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);

        draggableElement.classList.add('dragging');

        // Запобігаємо передачі події далі
        e.preventDefault();
        e.stopPropagation();
    }

    function dragElement(e: MouseEvent) {
        if (!isDragging) return;

        // Обчисліть зміщення курсору
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        // Оновіть позицію елементу з урахуванням initial зміщення
        draggableElement.style.position = 'fixed';
        draggableElement.style.left = `${elementX + deltaX}px`;
        draggableElement.style.top = `${elementY + deltaY}px`;

        // Запобігаємо передачі події далі
        e.preventDefault();
        e.stopPropagation();
    }

    function stopDragging(e?: MouseEvent) {
        // Перевірка, чи дійсно ми в режимі переміщення
        if (!isDragging) return;

        isDragging = false;
        draggableElement.classList.remove('dragging');

        // Видаляємо глобальні обробники подій
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);

        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    // Додаткова обробка для запобігання проблемам з SELECT та INPUT
    draggableElement.addEventListener('selectstart', (e) => e.preventDefault());
}