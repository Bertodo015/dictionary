import Dictionary from "../models/Dictionary.js";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const search = async (term) => {
    const response = await fetch(API_URL + new URLSearchParams({ q: term }));
    const results = await response.json();
    const dictionary = [];

    results.forEach((r) => {
        const { words } = r;
        const { word, audio, definitions} = words;

        const wordTerm = new Dictionary();
        wordTerm.word = word;
        wordTerm.audio = audio.join(", ");
        wordTerm.definitions = definitions.join(", ");

        dictionary.push(wordTerm);
    });

    return dictionary;
}