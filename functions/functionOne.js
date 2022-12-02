

let a = 4
console.log(a)

// function declaration
function goodMorning() {
    console.log('Bodia')
}

goodMorning()

// function expression -> put in some var/const/let
const good = function () {
    console.log('BoDia!')
}

goodMorning()


function sum(a, b){
    return a + b
}

const result = sum(3, 6)
console.log(result)

const test1 = sum(9, 6, 1, 7)
console.log(test1)

const test2 = sum(9)
// NaN not a number
console.log(test2)

/**somar num + undefined = NaN */