function foin(a, b, fn) {
    return fn(a, b)
}

const sumOnTerminal = (x ,y) => console.log(x + y)
const lessOnTerminal = (x ,y) => console.log(x - y)

//console.log(sumOnTerminal(9)(7))
//console.log(lessOnTerminal(9)(7))

foin(3, 5, sumOnTerminal)
foin(3, 5, lessOnTerminal)

//executando de forma repetida
// milisegundo
const cb = () => console.log("U.u")

setInterval(cb, 5000)




