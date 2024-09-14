//https://api.dictionaryapi.dev/api/v2/entries/en/

import { loadWords, searchWords } from "./views/DictionaryView.js";

//Salva o endereço origem do domínio do site
const location = window.location;
//const origin = location.origin;
const { origin } = location;
//location.setItem("origin", origin);

//console.log(document.referrer);
const previousURL = document.referrer;
if (previousURL.startsWith(`${origin}/details.html`)) {
    loadWords();
}

const form = document.querySelector("#form-area form");
form.onsubmit = (e) => {
    e.preventDefault();

    searchWords();
};