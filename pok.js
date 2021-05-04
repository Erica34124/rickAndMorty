// API endpoint --------------------------------------------
const baseUrl = 'https://rickandmortyapi.com/api';

// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var personagens, // Nome ou numero passado na caixa de busca
    location, // Responsavel por guardar os dados recebidos da API
    episodes; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPokeInfo(url, characters) {
  fetch(url + characters)
    .then(response => response.json())
    .then(data => {
      personagens = data;
    })
    .catch(err => console.log(err));
}

// Função responsavel por montar o HTML exibido na pagina
function createCard () {
  card = `
    <div class="pokemon-picture">
      <img src="${personagens.sprites.front_default}" alt="Sprite of ${characters.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${characters.name}</h1>
        <h2 class="number">Nº ${characters.id}</h2>
        <h3 class="type">Type: ${characters.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${characters.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${characters.weight  / 10}kg</h3>
        <h3 class="height">Height: ${characters.height  / 10}m</h3>
    </div>`;
  return card;
}

// Função que faz a chamada das principais funções e inicia o app
function startApp(characters) {
  requestPokeInfo(baseUrl, characters);

  setTimeout(function () {
    //Exibe uma mensagem caso o pokemon pesquisado não exista
    if(pokemon.detail) {
      erroMessage.style.display = 'block';
      container.style.display = 'none';
    }else{
      erroMessage.style.display = 'none';
      container.style.display = 'flex';
      container.innerHTML = createCard();
    }
  }, 2000);
}

console.log(personagens);
console.log(location);
console.log(episodes);

//const pesqPes = ()=>{
    //const cep = document.getElementById("characters").nodeValue;
    //const url
//}

/* Add Events --------------------------------------------
searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  startApp(pokeName);
  container.classList.add('fade');

  // Reseta o efeito fade removendo a classe fade
  setTimeout(() => {
    container.classList.remove('fade');
  }, 3000);
}); */