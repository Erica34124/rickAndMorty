function fazGet(url){
    let request= new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function criaLinha(usuario){
    linha=document.createElement("tr");
    tdId=document.createElement("td");
    tdNome=document.createElement("td");
    tdId.innerHTML=usuarios.Id
    tdNome.innerHTML=usuarios.Nome
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    return linha

}
function main(){
    let data=(fazGet("https://rickandmortyapi.com/api/episode/10,28"))
    let usuarios=json.parse(data);
    let tabela=document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha=criaLinha(element);
        
    });


    console.log(usuarios)
    }
main()
