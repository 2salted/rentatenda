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
const li10 = document.getElementById('li10');
const li11 = document.getElementById('li11');
const li12 = document.getElementById('li12');
const li13 = document.getElementById('li13');
const thesitetext = document.getElementById('thesitetext');
const litest = document.getElementById('litest');
const whatweoffertext = document.getElementById('whatweoffertext')

const tenty = document.getElementById('tenty');

//Change the title of the page
const newTitleEN = "RENTA TENDA - RENT A TENT KIT ON FLORES ISLAND, AZORES | tent rental services"
const newTitleFR = "RENTA TENDA - LOUEZ UN KIT DE TENTE SUR L'ÎLE DE FLORES, AÇORES | services tent a louer"
const newTitlePT = "RENTA TENDA - KIT ALUGUEL DE BARRACA NA ILHA DAS FLORES, AÇORES | serviços de aluguel de tendas"
const newTitleDE = "RENTA TENDA – MIETEN SIE EIN ZELT-KIT AUF DER INSEL FLORES, AZOREN | Vermietung von Zelten"
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
            thesitetext.innerHTML = 'At The Campsites'
            li5.innerHTML = 'Showers & Toilets'
            li6.innerHTML = 'BBQ area (including wood)'
            li7.innerHTML = 'Electricity for charging devices'
            li8.innerHTML = 'Picnic tables'
            whatweoffertext.innerHTML = 'What We Offer'
            li9.innerHTML = 'Tents in a variety of sizes'
            li10.innerHTML = 'Sleeping bags & Mattresses'
            li11.innerHTML = 'Picnic sets (silverware, plates, bowls, etc)'
            li12.innerHTML = '24/7 customer support'
            li13.innerHTML = 'More of What We Offer'
            litest.innerHTML = 'More of At The Campsites'
            document.title = newTitleEN;
            tenty.innerHTML = 'Our Tent Kits for rent'
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
            thesitetext.innerHTML = 'sur les terrains de camping'
            li5.innerHTML = 'Douches et toilettes'
            li6.innerHTML = 'Barbecue (y compris le bois)'
            li7.innerHTML = 'Électricité pour recharger les appareils'
            li8.innerHTML = 'Tables de pique-nique'
            litest.innerHTML = 'En savoir plus sur Au camping'
            whatweoffertext.innerHTML = 'Ce que nous offrons'
            li9.innerHTML = 'Tentes de différentes tailles'
            li10.innerHTML = 'Sacs de couchage et Matelas'
            li11.innerHTML = 'Ensembles de pique-nique (argenterie, assiettes, bols, etc.)'
            li12.innerHTML = 'Assistance client 24h/24 et 7j/7'
            li13.innerHTML = 'Plus de ce que nous offrons'
            document.title = newTitleFR;
            tenty.innerHTML = 'Nos kits de tentes à louer'
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
            thesitetext.innerHTML = 'nos acampamentos'
            li5.innerHTML = 'Chuveiros e banheiros'
            li6.innerHTML = 'Churrasco (incluindo madeira)'
            li7.innerHTML = 'Eletricidade para carregar dispositivos'
            li8.innerHTML = 'mesas de piquenique'
            litest.innerHTML = 'Mais de At The Campsites'
            whatweoffertext.innerHTML = 'O que nós oferecemos'
            li9.innerHTML = 'Barracas em vários tamanhos'
            li10.innerHTML = 'Sacos de dormir e colchões'
            li11.innerHTML = 'Conjuntos de piquenique (talheres, pratos, tigelas, etc)'
            li12.innerHTML = 'Suporte ao cliente 24/7'
            li13.innerHTML = 'Mais do que oferecemos'
            document.title = newTitlePT;
            tenty.innerHTML = 'Nossos Kits de Tendas para alugar'
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
            thesitetext.innerHTML = 'Auf den Campingplätzen'
            li5.innerHTML = 'Duschen und Toiletten'
            li6.innerHTML = 'Grill (inkl. Holz)'
            li7.innerHTML = 'Strom für Ladegeräte'
            li8.innerHTML = 'Picknicktische'
            litest.innerHTML = 'Mehr von At The Campsites'
            whatweoffertext.innerHTML = 'Was wir anbieten'
            li9.innerHTML = 'Zelte in verschiedenen Größen'
            li10.innerHTML = 'Schlafsäcke und Matratzen'
            li11.innerHTML = 'Picknick-Sets (Besteck, Teller, Schüsseln usw.)'
            li12.innerHTML = 'Kundensupport rund um die Uhr'
            li13.innerHTML = 'Mehr von unserem Angebot'
            document.title = newTitleDE;
            tenty.innerHTML = 'Unsere Zelt-Kits zum Mieten'
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