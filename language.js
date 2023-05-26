const de = document.getElementById('de');
const pt = document.getElementById('pt');
const en = document.getElementById('en');
const fr = document.getElementById('fr');
const langselect = document.getElementById('langselect');

// Retrieve the saved language from localStorage, or default to 'en' if none is found
const savedLang = localStorage.getItem('selectedLang') || 'en';

// Set the language select dropdown and page content to the saved language
setLanguage(savedLang);

fr.addEventListener('click', function(event) {
    // Set the language select dropdown and page content to French
    setLanguage('fr');
    event.preventDefault();
});
en.addEventListener('click', function(event) {
    // Set the language select dropdown and page content to French
    setLanguage('en');
    event.preventDefault();
});

function setLanguage(lang) {
    // Set the selected language in localStorage
    localStorage.setItem('selectedLang', lang);
    
    // Set the language select dropdown to the selected language
    langselect.innerHTML = getLanguageName(lang);
    
    // Set the page content to the selected language
    switch (lang) {
        case 'en':
            break;
        case 'fr':
            break;
        // Add cases for other languages here
        default:
            break;
    }
}

function getLanguageName(lang) {
    // Return the display name of the language for the dropdown
    switch (lang) {
        case 'en':
            return 'English';
        case 'fr':
            return 'Français';
        case 'pt':
            return 'Português';
        case 'de':
            return 'Deutsch';
        // Add cases for other languages here
        default:
            return 'Select Language';
    }
}

// Call setLanguage(savedLang) when the page loads to set the initial language
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(savedLang);
});