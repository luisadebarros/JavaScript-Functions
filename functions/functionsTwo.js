// passar uma função como param pra outra
function exect(fn){
    if( typeof fn === 'function')
    {
        console.log(typeof fn)
    }
}

// fn is a function

const goodMorning = () => {
    console.log("Bundia")
}

const afteroon = () => {
    console.log("BoaTardeeeee")
}

console.log(goodMorning())
console.log(afteroon())
console.log(exect(goodMorning))


// retornar outra function
function potencia(base, exp) {
    return Math.pow(base, exp)
}

const bits8 = potencia(2, 8)
console.log(bits8)


