const de = document.getElementById('de');
const pt = document.getElementById('pt');
const en = document.getElementById('en');
const fr = document.getElementById('fr');
const langselect = document.getElementById('langselect');
const h = document.getElementById('h');
const r = document.getElementById('r');
const c = document.getElementById('c');
const location1 = document.getElementById('location');
const location2 = document.getElementById('location2');
const tenttext = document.getElementById('tent-text');
const regrettext = document.getElementById('regret-text');
const whyustext = document.getElementById('whyustext');
const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const li4 = document.getElementById('li4');
const li5 = document.getElementById('li5');
const li6 = document.getElementById('li6');
const li7 = document.getElementById('li7');
const li8 = document.getElementById('li8');
const li9 = document.getElementById('li9');

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
pt.addEventListener('click', function(event) {
    // Set the language select dropdown and page content to French
    setLanguage('pt');
    event.preventDefault();
});
de.addEventListener('click', function(event) {
    // Set the language select dropdown and page content to French
    setLanguage('de');
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
            //header translation
            location1.innerHTML = 'Located in the Archipelago of the Açores on Flores Island'
            location2.innerHTML = 'Flores, Azores'
            h.innerHTML = 'Home'
            r.innerHTML = 'Rentals'
            c.innerHTML = 'Contact'
            tenttext.innerHTML = 'RENT TENT KITS ON FLORES ISLAND'
            regrettext.innerHTML = 'THE BEST SOLUTION - YOU WON\'T REGRET'
            whyustext.innerHTML = 'Why Us'
            li1.innerHTML = 'High-quality tent kits'
            li2.innerHTML = 'Expert customer service'
            li3.innerHTML = 'Flexible dropoff & pickup options'
            li4.innerHTML = 'Our rentals comes in a kit with all your outdoor needs!'
            break;
        case 'fr':
            //header translation
            location1.innerHTML = 'Situé dans l\'archipel des Açores sur l\'île de Flores'
            location2.innerHTML = 'Flores, Açores'
            h.innerHTML = 'Page d\'accueil'
            r.innerHTML = 'Louer une tent'
            c.innerHTML = 'Contactez-nous'
            tenttext.innerHTML = 'LOUEZ DES KITS DE TENTE SUR L\'ÎLE DE FLORES'
            regrettext.innerHTML = 'LA MEILLEURE SOLUTION - VOUS NE REGRETTEREZ PAS'
            whyustext.innerHTML = 'Pourquoi nous'
            li1.innerHTML = 'Kits de tente de haute qualité'
            li2.innerHTML = 'Service client expert'
            li3.innerHTML = 'Options flexibles de dépôt et de ramassage'
            li4.innerHTML = 'Nos Tent sont livrées en kit avec tous vos besoins extérieurs!'
            break;
        case 'pt':
            //header translation
            location1.innerHTML = 'Localizado no arquipélago dos Açores na ilha das Flores'
            location2.innerHTML = 'Flores, Açores'
            h.innerHTML = 'Pagina inicial'
            r.innerHTML = 'alugar uma tenda'
            c.innerHTML = 'Contate-nos'
            tenttext.innerHTML = 'ALUGUE KITS DE TENDAS NA ILHA DAS FLORES'
            regrettext.innerHTML = 'A MELHOR SOLUÇÃO - VOCÊ NÃO VAI SE ARREPENDER'
            whyustext.innerHTML = 'Por que nós'
            li1.innerHTML = 'Kits de tendas de alta qualidade'
            li2.innerHTML = 'Atendimento ao cliente especializado'
            li3.innerHTML = 'Opções flexíveis de embarque e desembarque'
            li4.innerHTML = 'Nossos aluguéis vêm em um kit com todas as suas necessidades ao ar livre!'
            break;
        case 'de':
            //header translation
            location1.innerHTML = 'Liegt im Azoren-Archipel auf der Insel Flores'
            location2.innerHTML = 'Flores, Azoren'
            h.innerHTML = 'Startseite'
            r.innerHTML = 'ein Zelt mieten'
            c.innerHTML = 'Kontaktiere uns'
            tenttext.innerHTML = 'MIETEN SIE ZELT-KITS AUF DER INSEL FLORES'
            regrettext.innerHTML = 'DIE BESTE LÖSUNG – SIE WERDEN ES NICHT BEREUNE'
            whyustext.innerHTML = 'Warum wir'
            li1.innerHTML = 'Hochwertige Zeltbausätze'
            li2.innerHTML = 'Kompetenter Kundenservice'
            li3.innerHTML = 'Flexible Abgabe- und Abholoptionen'
            li4.innerHTML = 'Unsere Leihausrüstung wird in einem Set geliefert, das alle Ihre Outdoor-Bedürfnisse enthält!'
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