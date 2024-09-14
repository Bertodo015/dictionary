import Dictionary from "./models/Dictionary.js";
import { wordDetails } from "./views/DictionaryView.js";


const location = window.location;
const url = new API_URL(location.href)
console.log(location.origin);

const search = window.location.search;
//console.log(search);
const params = new URLSearchParams(search);
//console.log(params);

const word = new Dictionary();
word.word = params.get("word");
word.audio = params.get("audio");
word.definitions = params.get("definitions");

wordDetails(word);