import { showModal } from "./modules/showModal.js";
import { handleHeader } from "./modules/handleHeader.js";
import { handleScroll } from "./modules/handleScroll.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header');
    const phone = document.getElementById('phone-tamplate');
    const heroText = document.getElementById('hero-text');
    const heroIcon = document.getElementById('hero-icon');

    //Показ елементів за скролом 
    window.addEventListener('scroll', () => {handleHeader(header, 10)});

    // Показ Модального вікна
    showModal();
    
    // Показ головної картинки
    setTimeout(() => {
        heroText.classList.add('show-hero-text');
    }, 1);

    setTimeout(() => {
        heroIcon.classList.add('show');
    }, 1000);

    setTimeout(() => {
        phone.classList.add('visible');
    }, 1500);


   
});