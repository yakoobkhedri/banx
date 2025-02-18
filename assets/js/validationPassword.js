document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');
    const submitBtn = document.getElementById('submitBtn');

    const uppercaseMessage = document.getElementById('uppercaseMessage');
    const lengthMessage = document.getElementById('lengthMessage');
    const numberMessage = document.getElementById('numberMessage');

    // نمایش یا مخفی کردن رمز عبور
    togglePassword.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="currentColor" class="bi bi-eye-slash text-main" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>`;
        } else {
            passwordInput.type = 'password';
            togglePassword.innerHTML = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_3155" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
            <rect y="0.137695" width="24" height="24" fill="#D9D9D9"></rect>
            </mask>
            <g mask="url(#mask0_1_3155)">
            <path d="M12 16.1377C13.25 16.1377 14.3125 15.7002 15.1875 14.8252C16.0625 13.9502 16.5 12.8877 16.5 11.6377C16.5 10.3877 16.0625 9.3252 15.1875 8.4502C14.3125 7.5752 13.25 7.1377 12 7.1377C10.75 7.1377 9.6875 7.5752 8.8125 8.4502C7.9375 9.3252 7.5 10.3877 7.5 11.6377C7.5 12.8877 7.9375 13.9502 8.8125 14.8252C9.6875 15.7002 10.75 16.1377 12 16.1377ZM12 14.3377C11.25 14.3377 10.6125 14.0752 10.0875 13.5502C9.5625 13.0252 9.3 12.3877 9.3 11.6377C9.3 10.8877 9.5625 10.2502 10.0875 9.7252C10.6125 9.2002 11.25 8.9377 12 8.9377C12.75 8.9377 13.3875 9.2002 13.9125 9.7252C14.4375 10.2502 14.7 10.8877 14.7 11.6377C14.7 12.3877 14.4375 13.0252 13.9125 13.5502C13.3875 14.0752 12.75 14.3377 12 14.3377ZM12 19.1377C9.56667 19.1377 7.35 18.4585 5.35 17.1002C3.35 15.7419 1.9 13.921 1 11.6377C1.9 9.35436 3.35 7.53353 5.35 6.1752C7.35 4.81686 9.56667 4.1377 12 4.1377C14.4333 4.1377 16.65 4.81686 18.65 6.1752C20.65 7.53353 22.1 9.35436 23 11.6377C22.1 13.921 20.65 15.7419 18.65 17.1002C16.65 18.4585 14.4333 19.1377 12 19.1377ZM12 17.1377C13.8833 17.1377 15.6125 16.6419 17.1875 15.6502C18.7625 14.6585 19.9667 13.321 20.8 11.6377C19.9667 9.95436 18.7625 8.61686 17.1875 7.6252C15.6125 6.63353 13.8833 6.1377 12 6.1377C10.1167 6.1377 8.3875 6.63353 6.8125 7.6252C5.2375 8.61686 4.03333 9.95436 3.2 11.6377C4.03333 13.321 5.2375 14.6585 6.8125 15.6502C8.3875 16.6419 10.1167 17.1377 12 17.1377Z" fill="#0D446B"></path>
            </g>
          </svg>`;
        }
    });

    // اعتبارسنجی رمز عبور
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isLongEnough = password.length >= 8;

        // اعتبارسنجی حروف بزرگ
        if (hasUpperCase && hasLowerCase) {
            uppercaseMessage.classList.add('success');
        } else {
            uppercaseMessage.classList.remove('success');
        }
        
        // اعتبارسنجی طول رمز عبور
        if (isLongEnough) {
            lengthMessage.classList.add('success');
        } else {
            lengthMessage.classList.remove('success');
        }

        // اعتبارسنجی عدد
        if (hasNumber) {
            numberMessage.classList.add('success');
        } else {
            numberMessage.classList.remove('success');
        }

        // فعال/غیرفعال کردن دکمه سابمیت
        if (hasUpperCase && hasNumber && isLongEnough) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });
});