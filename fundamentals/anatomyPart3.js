// function expressions
const increment = function(n){
    return n + 1
}

// função arrow sempre será anônima
const incrementA = (n) => {
    return n + 1
}

console.log(increment(5))
console.log(incrementA(9))

const incrementB = n => {
    return n + 1
}

console.log(incrementB(2))

const incrementC = n => n+1

console.log(incrementC(4))

const sum = (a, b) => a + b
console.log(sum(8, 14))