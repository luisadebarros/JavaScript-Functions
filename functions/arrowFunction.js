// arrow function

const u = () => console.log("Hi")

u()

// um parametro pode ser sem parentes
// simbolo da crase estilo $
const saudacao = nome => console.log(`O ${nome} dificil`)
saudacao("Welligton")

// função sem chave não precisa de return, já o contrário precisa
// ... => pode colocar quantos quiser
// nums is array
const sum = (...nums) => {
    let end = 0
    console.log(typeof nums)
    console.log(Array.isArray(nums))
    for (let n of nums)
    {
        end += n
    }
    return end
}

//console.log(sum([1, 3, 7, 8]))
//console.log(sum([1, 3, 6, 9, 7, 3]))
//console.log(sum([1, 3, 7, 8, 8, 6, 3]))

const pont = (base) => {
    // pode tirar o return e a chaves
    return (exp) => {
        return Math.pow(base, exp)
    }
}

const pontTwo = (base) => (exp) => Math.pow(base, exp)    


console.log(pont(3)(2))

// dentro de qualquer array a gente consegue usar essa fucntion
Array.prototype.log = function () {
    console.log(this)
}

Array.prototype.last = function () {
    console.log(this[this.length - 1])
}


Array.prototype.first = function () {
    console.log(this[0])
}


const numbers = [1, 3, 4, 2, 99]

numbers.last()
numbers.first()