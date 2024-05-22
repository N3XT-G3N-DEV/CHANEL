const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

// Check for theme preference in localStorage
const prefersDarkMode = localStorage.getItem('theme') === 'dark';
if (prefersDarkMode) {
    body.classList.add('dark');
    themeSwitch.classList.add('dark'); 
}

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Store theme preference in localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});