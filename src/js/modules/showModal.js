export function showModal() {
    const burgerButton = document.querySelector("#burger");
    const modalWindow = document.querySelector("#modal-window");
    const modalNav = document.querySelector("#modal-nav");
    
    if (!burgerButton || !modalWindow || !modalNav) return;

    burgerButton.onclick = () => {
        modalWindow.classList.remove('hidden');
    }
    modalWindow.addEventListener('click', (event) => {
        if (!modalNav.contains(event.target)) {
            modalWindow.classList.add('hidden');
        }
    });
}