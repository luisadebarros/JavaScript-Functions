// anonymous functions
(function (a, b, c){
    return a + b + c
})

// function express (atribuir uma função para a variável)
const sum = function (a, b){
    return a + b
}

console.log(sum(8, 9))

const anotherSum = sum
console.log(anotherSum(7, 7))

let x = 3
console.log(x)

x = sum
console.log(x(11, 4))