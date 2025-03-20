import { showModal } from "./modules/showModal.js";
import { handleScroll } from "./modules/handleScroll.js";

document.addEventListener("DOMContentLoaded", () => {
    showModal();
    window.addEventListener('scroll', handleScroll);
});