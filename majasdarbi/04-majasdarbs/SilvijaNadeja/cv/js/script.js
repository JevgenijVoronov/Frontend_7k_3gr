const toggleButton = document.getElementByClassName("toggle-button")[0]
const navLinks = document.getElementByClassName("nav-links")[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})