/*const consumirAPI = async (graphqlEndpoint, query, variables = {}) => {
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