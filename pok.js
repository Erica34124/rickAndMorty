var { graphql , buildSchema } = requernpm install graphql - ioga( 'graphql' ) ;   
 
var schema = buildSchema( ` 
  tipo Query {
    ola: String
  }
` ) ;

var root = { hello:( ) => 'Olá, mundo!' } ;     
 
graphql ( esquema , '{hello}' , root ).then( ( resposta ) => {   
  console.log ( resposta );
} ) ;

