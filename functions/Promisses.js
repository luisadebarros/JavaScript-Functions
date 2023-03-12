let a = 1;
//console.log(a)


// algo que vai ser executado no futuro e será recebido no futuro
// passa uma função como parametro
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Anna', 'Luísa', 'Matias', 'Murilo'])
}).then(FirstElement).then(cosole.log)

function FirstElement(array) {
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const LetraMinuscula = letra => letra.toLowerCase()


// quando a promessa for cumprida, ele retorna o primeiro valor
// você pode fazer outros then



