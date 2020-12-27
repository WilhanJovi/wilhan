// menu

const ul = document.querySelector('nav ul');
const button = document.querySelector('.menu-toogle');

button.addEventListener("click", function() {
    ul.classList.toggle('aktif');
})
