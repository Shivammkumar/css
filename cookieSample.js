/ Function to set a cookie with the specified attributes
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = ${name}=${value || ""}${expires}; path=/; samesite=strict;
}

// Function to get a cookie by name
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply the theme based on the cookie value
function applyTheme(theme) {
    document.body.className = theme;
}

// Event listeners for theme buttons
document.getElementById('lightBtn').addEventListener('click', function () {
    setCookie('theme', 'light', 365);
    applyTheme('light');
});

document.getElementById('darkBtn').addEventListener('click', function () {
    setCookie('theme', 'dark', 365);
    applyTheme('dark');
});

// On page load, check the cookie and apply the theme
window.onload = function () {
    let theme = getCookie('theme');
    if (theme) {
        applyTheme(theme);
    }
};