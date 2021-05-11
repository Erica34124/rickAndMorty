// get para personagens
$.getJSON('https://rickandmortyapi.com/', 

function(data) {

    var select = '<select name="personagens">\
                  <option>Selecione...</option>';
    for (var i in data) {

         select += '<option value="'+data[i].codigo +'">'+ data[i].nome + '</option>';

    }
    select += '</select>';
    $('#personagens').html(select);
   
    return select

});

 testando 
function populateList(){
    const data = Array.from({length: 40})
    .map((_,i) =>   '<div class="item">item ${(' + (i+1) + ')}</div>') 
    const list = document.querySelector('#personagens .list')
    list.innerHTML = data

  console.log(data)
}


populateList()

data()


//Get para locais

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function criaLinha(usuarios){
    linha = document.createElement("tr");
    tdId = documet.createElement("td");
    tdNome =document.createElement("td");
    tdId.innerHTML = usuarios.id
    tdNome.innerHTML = usuarios.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}
function criaLinha(){
    linha = document.createElement("tr");
    tdId = documet.createElement("td");
    tdNome =document.createElement("td");
    tdId.innerHTML = usuarios.id
    tdNome.innerHTML = usuarios.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;

function principal() {
    let data = fazGet("https://rickandmortyapi.com/graphql");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);}

    
    };

    principal()
    


// Get episódios
import { filterGenderSelected, filterStatusSelected, filterSpeciesSelected, sortOrder, calcFilter } from './data.js';
import data from './data/https://rickandmortyapi.com/graphql';
const dataBase = data.results;
const filterSelect = document.querySelector('.filter-gender');
const filterSelectStatus = document.querySelector('.filter-status');
const filterSelectSpecies = document.querySelector('.filter-species');
const filterSelectOrder = document.querySelector('.filter-order');

filterSelect.addEventListener('change', filterGender);
filterSelectStatus.addEventListener('change', filterStatus);
filterSelectSpecies.addEventListener('change', filterSpecies);
filterSelectOrder.addEventListener('change', filterOrder);
document.getElementById("hero").onload = printCharacters(dataBase);

function printCharacters(dados) {
    let cards = "";
    for (let item of dados) {
        cards +=
            ` 
            <article id="teste" class="personagem">
                <div class="frente">
                    <p class="card-name">${item.name.toUpperCase()}</p>
                    <img src="${item.image}" class="card-img">
                    <p class="card-tras">Status: ${item.status.toUpperCase()}</p>
                    <p class="card-tras">Espécie: ${item.species.toUpperCase()}</p>
                    <p class="card-tras">Gênero: ${item.gender.toUpperCase()}</p>
                    <p class="card-tras">${item.location.name.toUpperCase()}</p>
                </div>
            </article>
            `
    }
    document.getElementById("hero").innerHTML = cards
}

function resultCalc(dataBase, selectedFilter) {
    let result = calcFilter(dataBase, selectedFilter)
    document.getElementById("episodios").innerHTML = "Existem " + selectedFilter.length + " personagens deste filtro e representam " + result + "% do total de personagens"
}

function filterGender() {
    const valueGenderSelected = filterSelect.value
    const selectedGender = filterGenderSelected(dataBase, valueGenderSelected)
    printCharacters(selectedGender)
    resultCalc(dataBase, selectedGender)
}

function filterStatus() {
    const valueStatusSelected = filterSelectStatus.value
    const selectedStatus = filterStatusSelected(dataBase, valueStatusSelected)
    printCharacters(selectedStatus)
    resultCalc(dataBase, selectedStatus)
}

function filterSpecies() {
    const valueSpeciesSelected = filterSelectSpecies.value
    const selectedSpecies = filterSpeciesSelected(dataBase, valueSpeciesSelected)
    printCharacters(selectedSpecies)
    resultCalc(dataBase, selectedSpecies)
}

function filterOrder() {
    document.getElementById("episodios").innerHTML = ""
    const valueOrderSelected = filterSelectOrder.value
    const selectedOrder = sortOrder(dataBase, valueOrderSelected)
    printCharacters(selectedOrder)
}
© 2021 GitHub, Inc.

//Teste Pokemom

var listaPokemom;
listaPokemom = document.querySelector("#episodios");
function main(){
  const pokemons = ` 
  query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
    query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
 
} `;
requestApi(episodios).then(res=> showPokemom(res.episodios));}

function showPokemom(episodios){
  let template ="";
  pokemons.forEach(episodios =>(template+=`
  <li class="media">
  <img=class="mr-3" width="100" src="${episodios.image}">
  <div class="media-body">
  <h4>${pokemons.nome}<h5>
  <button class="btn btn-secondary btn-sm"ver tetalhes></button>" 
  </div>
  </li>`))
};/*const consumirAPI = async (graphqlEndpoint, query, variables = {}) => {
  const response = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
   /*response = await response.json();
   return response.data ---

   return response.json();
}

const GRAPHQL_ENDPOINT = 'https://rickandmortyapi.com/graphql'

const consultarTodosQuery = `
query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}`
const pessoa = consumirAPI;
consumirAPI(GRAPHQL_ENDPOINT, pessoa, { title: 'Estudar GraphQL' }).then(res=>showPessoa(res.pessoa));
//criar variavel para consumir api

const listaPessoa = document.querySelector("#pessoa");
console.log("Consulta",consultarTodosQuery)


function main(){
    const pessoa =`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          name
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
    `;
    
requestApi(pessoa).then(res=>showPessoa(res.pessoa));

 listaPessoa.innerHTML=`
 <ul class="list-unstyled">
 ${template}
 </ul>
 
 `;
}
console.log ("pessoa",pessoa);

function showPessoa(pessoa){
  let template="";
    pessoa.forEach(
    pessoa => 
   (template += `
    
      <li class="media">
          <img class="mr-3" width="100" src="${pessoa.image}"></img>
          <div class="media-body">
              <h5>${pessoa.name}</h5>
               <button class=" btn btn-secondary btn-sm">Ver detalhes </button>
          </div>
      </li>
      `)
      );
      listaPessoa.innerHTML=`
      <ul class="list-unstyled">
      ${template}
      </ul>
 
      `;
}

console.log('verificação de pessoa', pessoa)

showPessoa(pessoa)*/

$(document).ready(function(){
  $("txtPersonagens").focusout(function(){
    
    var  urlStr ="https://rickandmortyapi.com/graphql"+personagens+"/json";
    $ajax({
      url:urlStr,
      type:"get",
      dataType:"json",
      sucess: function(data){
        console.log(data);
        $("#txtPersonagens").val(data.personagens);
        $("#txtLocais").val(data.locais);
        $("#txtEpisodios").val(data.episodios);
      }
      /*  error:function(erro){
        console.log(erro);
      }*/
    });
  });
});
//Validação de dados
<form action="" id="personagens" method="POST" name="personagens">

    function validar() {
      val name="personagens";
      if name.value=" "{
        alert("Nome do personagem não informado");
        name.focus();
      }
 </form>
    
  }
  
