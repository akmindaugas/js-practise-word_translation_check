// Pasirašyti applikacija kuri jum padės praktikuotis anglų kalbą: 
// 1. Ekrane turi atsirast lietuviškas žodis, mes jį turim inpute parašyti anglų kalbą bei paspaust ant button "TIKRINTI". 
// 2. Jeigu parašėm gerą žodį - ekrane turi atsirast sekmės žinutė. 
// 3. Nesekmės atveju turime gaut nesekmės žinutę;
// 4. Po 3 nesekmingų spėjimų ekrane turi atsirast angliškas žodis.

const wordLT = document.getElementById('word-to-translate').textContent;
const wordYourTranslation = document.getElementById('word-your-guess').textContent;
const wordEN = document.getElementById('word-right-translation');
const button = document.getElementById('button');
const reset = document.getElementById('reset');

button.addEventListener('click', function() {

    if (wordEN.toLocaleUpperCase === wordYourTranslation.toLocaleUpperCase) {
        console.log('Teisingai');

    } else {
        console.log('Bandyk dar karta');
        setTimeout(() => {
        wordYourTranslation.innerText = "";
    }, 3000);
    
    };

});

reset.addEventListener('click', () => {
    wordYourTranslation.innerText = "";
    wordEN.innerText = "";
    wordLT.innerText = "";
});

