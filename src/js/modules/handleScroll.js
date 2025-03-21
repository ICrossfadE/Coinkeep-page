// Стан видимості для кожного елемента
const visibilityState = new Map();

export function handleScroll(htmlIdelement, startScroll) {
    const triggerPoint = startScroll;
    const scrollPosition = window.scrollY;
    
    // Отримуємо або створюємо стан для конкретного елемента
    if (!visibilityState.has(htmlIdelement)) {
        visibilityState.set(htmlIdelement, false);
    }

    let wasVisible = visibilityState.get(htmlIdelement);

    if (scrollPosition > triggerPoint && !wasVisible) {
        htmlIdelement.classList.add('visible');
        visibilityState.set(htmlIdelement, true);
    }
}

