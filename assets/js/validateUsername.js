document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const submitBtn = document.getElementById('submitBtn');

    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.trim() !== '') {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });
});