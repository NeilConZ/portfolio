const toggle = document.getElementById('darkModeToggle');

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        toggle.textContent = 'Light Theme';
        localStorage.setItem('prefersDark', '1');
    } else {
        document.body.classList.remove('dark-mode');
        toggle.textContent = 'Dark Theme';
        localStorage.removeItem('prefersDark');
    }
}

// Initialize from saved preference or system preference
const saved = localStorage.getItem('prefersDark');
if (saved === '1') {
    setTheme(true);
} else if (saved === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme(true);
} else {
    setTheme(false);
}

toggle.addEventListener('click', function() {
    const currentlyDark = document.body.classList.contains('dark-mode');
    setTheme(!currentlyDark);
});
