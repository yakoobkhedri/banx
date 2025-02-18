document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const submitBtn = document.getElementById('submitBtn');

    numberInput.addEventListener('input', function () {
        const inputValue = numberInput.value;

        // بررسی اینکه آیا ورودی فقط شامل اعداد فارسی یا انگلیسی است
        const isValid = /^[\u06F0-\u06F90-9]{10}$/.test(inputValue);

        if (isValid) {
            submitBtn.disabled = false; // فعال کردن دکمه سابمیت
        } else {
            submitBtn.disabled = true; // غیرفعال کردن دکمه سابمیت
        }
    });
});