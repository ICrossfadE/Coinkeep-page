// стан header
let wasVisible = false;

export function handleScroll() {

    const header = document.getElementById('header');
    //Значення після якого появиться header
    const triggerPoint = 10;
    
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > triggerPoint && !wasVisible) {
        // Якщо скролим нижче потрібного значення і header ще не видно
        header.classList.add('visible');
        wasVisible = true;
    } else if (scrollPosition <= triggerPoint && wasVisible) {
        // Якщо скролим вище нашого значення і header видно
        header.classList.remove('visible');
        wasVisible = false;
    }

   
}

