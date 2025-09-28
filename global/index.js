let menu = document.querySelector('#menu');
let closeModal = document.querySelector('#closeModal');
let modal = document.querySelector('#modal');

menu.addEventListener('click', () => {
    modal.classList.toggle('active');
})

closeModal.addEventListener('click', () => {
    modal.classList.toggle('active')
})