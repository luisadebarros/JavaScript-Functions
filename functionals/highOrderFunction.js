// pode passar uma função como um argumento 
// ou parametro

function run(fn) {
    return `Result: ${fn()}`
}

function sayHello(){
    console.log('Hallo!')
    // se colocarmo um retorno aqui, ela
    // dará erro
}

run(sayHello)
run(function () {
    console.log("HAALOO!")
})
const result = run(Math.random)
console.log(result)