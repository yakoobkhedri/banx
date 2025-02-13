let closeAuthModal = document.getElementById('closeAuthModal');

closeAuthModal.addEventListener('click' , function () {
    closeAuthModal.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('show');
    closeAuthModal.parentElement.parentElement.parentElement.classList.remove('show');
    closeAuthModal.parentElement.parentElement.parentElement.style.display = 'none';
    closeAuthModal.parentElement.parentElement.parentElement.previousElementSibling.style.display = 'none';
})