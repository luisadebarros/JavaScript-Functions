function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(9, 12, 24)
logParams(9, 12, 24, 66, 88)
logParams(1, 6)

// undefined => onde a variavel/parametro não é setado

//valor padrão
function defautlParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defautlParams(9, 6, 7)
defautlParams(9, 6)
defautlParams(9)
defautlParams()

function logNums(nums){
    for(let n of nums){
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5])


// operador spread/rest
// a função vai receber vários valores
function logsNums(...nums){
    console.log(nums)
}

logsNums(1, 2, 3, 4)
logsNums(8, 9, 10, 11, 12)

function sumAll(...nums){
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(8, 9, 3 , 2, 7))
console.log(sumAll(8, 9, 3 , 2, 7, 9))
console.log(sumAll(8, 9, 3 , 2))