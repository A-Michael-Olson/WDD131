const themeSelect = document.getElementById('theme');
const body = document.body;
const logoIMG = document.getElementById('.logo img');


themeSelect.addEventListener('change', function () {
    const theme = themeSelect.value;

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        logoIMG.src = 'assets/byui-logo-white.webp';
    }

    if (theme === 'light') {
        body.classList.remove('dark-theme');
        logoIMG.src = 'assets/byui-logo.webp';
    }
});