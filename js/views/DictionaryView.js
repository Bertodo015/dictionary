import { search } from "../controllers/DictionaryController.js";
import Dictionary from "../models/Dictionary.js";

const $ = document.getElementById.bind(document);

const printCard = (words) => {
    const word = words.word;
    const audio = words.audio;
    const definitions = words.definitions;
    const url = `/details.html?word=${word}&audio=${audio}&definitions=${definitions}`;

//testar definitions.lenght

    const wordCard = `
        <div class="card">
            <a href="${url}">
                <p>${word.words}</p>
            </a>
        </div>
    `;

    const wordsArea = $("card");
    wordsArea.insertAdjacentHTML("beforeend", wordCard);
};

export const searchWords = async () => {
    const query = $("query").value.trim();
  
    if (query) {
      $("not-found-message").style.display = "none";
      
      //https://pixabay.com/pt/gifs/carga-carregando-natal-meias-2765/
      const loadingAnimation = `<img src="/img/loading.gif">`;
      $("card").innerHTML = `${loadingAnimation}`;
  
      // Não sabemos quanto tempo a instrução abaixo demorará para completar
      const words = await search(query);
  
      $("card").innerHTML = "";
  
      // Se tem resultados para exibir...
      if (words.length > 0) {
        //salva os words no local storage (armazenamento local)
        const wordsJSON = JSON.stringify(words);
        localStorage.setItem("words", wordsJSON);
        
        words.forEach((s) => printCard(s));
      } else {
        $("not-found-message").style.display = "block";
      }
    }
  };

  export const wordDetails = (words) => {
    $("word").innerText = words.word;
    $("audio").innerText = words.audio;
    $("definitions").innerText = words.definitions;
  };
  
  export const loadWords = () => {
    const wordsJSON = localStorage.getItem("words");
  
    /**
    * Verifica se tem shows salvos no local storage.
    * Caso tenha, exibe eles na página.
    */
    if (wordsJSON) {
      const words = JSON.parse(wordsJSON);
      words.forEach((s) => printCard(s));
    }
  };