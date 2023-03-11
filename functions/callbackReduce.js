/***
 * [3, 2 , 1, -3, 4, 7]
 * 
 * array.Reduc(fn, i(posição))
 *  (acc, el) 
 * 1º (0, 3)
 * 3 de cima
 * 2ª (3, 2)
 * soma o ultimos do anterios
 * 3º (5, 1)
 * 4º (6, -3)
 * 5º (3, 4)
 * 7º (7, 7) => retorna um número 14
 * 
 * [1, 2, 3, 4]
 * fazer a multiplação dos valorres
 * fn(acc, el) => acc * el
 * 
 * 1 - (1, 2) => 2
 * 2 - (2, 3) => 6
 * 3 - (6, 4) => 24
 * 
 *  com valores inciais
 * [1, 2, 3, 4]
 * fazer a multiplação dos valorres
 * fn(acc, el) => acc * el
 * 
 * 1 - (0, 1) => 0
 * 2 - (0, 3) => 0
 * 3 - (0, 4) => 0
 * 
 * com valores inciais ele puxa primero o valor inicial, se não, pega o primeiro elemento
 */


const cart = [
    { name: 'Apple AirPods Pro', price: 249.00, amount: 10 },
    { name: 'Samsung Galaxy S21 Ultra 5G', price: 1199.99, amount: 5 },
    { name: 'Sony WH-1000XM4 Wireless Headphones', price: 348.00, amount: 8 },
    { name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con', price: 299.99, amount: 3 },
    { name: 'HP Pavilion 15 Laptop', price: 799.99, amount: 12 },
    { name: 'Canon EOS R5 Full-Frame Mirrorless Camera', price: 3899.00, amount: 2 }
];

const  getAll = item => item.price * item.amount
const sum = (acc, el) => acc + el

const TotalValue = cart
                    .map(getAll)
                    .reduce(sum)





Array.prototype.Reduces = function (fn, n) {
    j = 0
    acc = 0

    if(n != undefined){
        acc = fn(n, this[0])
        el = this[0]
        n = undefined
        i = 1
    }

    for(i = j; i < this.length; i++)
    {
        
        acc = fn(acc, this[i])
        console.log(this[i])
        el = this[i]
    }

    return acc
}


Array.prototype.MyReduces = function (fn, inicial) {
    let acc = inicial

    for (let i = 0; i < this.length; i++) {
        if(!acc & i === 0){
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }

    return acc
}

const TotalValues = cart
                    .map(getAll)
                    .MyReduces(sum, 10)

console.log(TotalValue)
console.log(TotalValues)





