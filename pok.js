const consumirAPI = async (graphqlEndpoint, query, variables = {}) => {
  const response = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
   /*response = await response.json();
   return response.data */
   return response.json();
}

const GRAPHQL_ENDPOINT = 'https://rickandmortyapi.com/graphql'

const consultarTodosQuery = `
q{"_queryType":"Query","_mutationType":null,"_subscriptionType":null,"_directives":[{"name":"cacheControl","description":"","locations":["FIELD_DEFINITION","OBJECT","INTERFACE"],"args":[{"name":"maxAge","description":"","type":"Int"},{"name":"scope","description":"","type":"CacheControlScope"}]},{"name":"skip","description":"Directs the executor to skip this field or fragment when the `if` argument is true.","locations":["FIELD","FRAGMENT_SPREAD","INLINE_FRAGMENT"],"args":[{"name":"if","description":"Skipped when true.","type":"Boolean!"}]},{"name":"include","description":"Directs the executor to include this field or fragment only when the `if` argument is true.","locations":["FIELD","FRAGMENT_SPREAD","INLINE_FRAGMENT"],"args":[{"name":"if","description":"Included when true.","type":"Boolean!"}]},{"name":"deprecated","description":"Marks an element of a GraphQL schema as no longer supported.","locations":["FIELD_DEFINITION","ENUM_VALUE"],"args":[{"name":"reason","description":"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).","type":"String","defaultValue":"No longer supported"}]}],"astNode":null,"_typeMap":{"Query":"Query","ID":"ID","Character":"Character","String":"String","Location":"Location","Episode":"Episode","Int":"Int","FilterCharacter":"FilterCharacter","Characters":"Characters","Info":"Info","FilterLocation":"FilterLocation","Locations":"Locations","FilterEpisode":"FilterEpisode","Episodes":"Episodes","__Schema":"__Schema","__Type":"__Type","__TypeKind":"__TypeKind","Boolean":"Boolean","__Field":"__Field","__InputValue":"__InputValue","__EnumValue":"__EnumValue","__Directive":"__Directive","__DirectiveLocation":"__DirectiveLocation","CacheControlScope":"CacheControlScope","Upload":"Upload"},"_implementations":{}}`

consumirAPI(GRAPHQL_ENDPOINT, pessoa, { title: 'Estudar GraphQL' }).then(console.log);
//criar variavel para consumir api

const listaPessoa = document.querySelector("#pessoa");
console.log("Consulta",consultarTodosQuery)
console.log ("pessoa",pessoa);


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
    `
    
requestApi(pessoa).then(res=>showPessoa(res.pessoa));

 listaPessoa.innerHTML=`
 <ul class="list-unstyled">
 ${template}
 </ul>
 
 `;
}
function showPessoa(pessoa){
  let template='';
    pessoa.forEach(
    pessoa => 
   (template += `
    
      <li class="media">
          <img class="mr-3" width="100" src="${pokemon.image}"></img>
          <div class="media-body">
              <h5>${pokemom.name}</h5>
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

showPessoa(pessoa)