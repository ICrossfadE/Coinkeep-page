// стан header
let wasVisible = false;

export function handleHeader(htmlIdelement, startScroll) {

   
    //Значення після якого появиться header
    const triggerPoint = startScroll;
    
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > triggerPoint && !wasVisible) {
        // Якщо скролим нижче потрібного значення і header ще не видно
        htmlIdelement.classList.add('visible');
        wasVisible = true;
    } else if (scrollPosition <= triggerPoint && wasVisible) {
        // Якщо скролим вище нашого значення і header видно
        htmlIdelement.classList.remove('visible');
        wasVisible = false;
    }

   
}

