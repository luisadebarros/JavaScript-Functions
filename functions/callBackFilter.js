 /**
 * Filter
 * 
 * [6, 5, 7, 3, 9, 10]
 * quero filtrar somente os >= 7 
 * gera um novo array
 * 
 * array.Filter(fn())
 * fn () =>  return bool ? true (vai fazer parte do array resultante) 
 * : false (vai fazer parte do array resultante)
 * 
 * fn (el) => return (el >= 7)
 * 
 * [7, 9, 10] => somente os maiores e iguais a 7
 */

const carts = [
    { name: 'Apple AirPods Pro', price: 249.00, amount: 10 },
    { name: 'Samsung Galaxy S21 Ultra 5G', price: 1199.99, amount: 5 },
    { name: 'Sony WH-1000XM4 Wireless Headphones', price: 348.00, amount: 8 },
    { name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con', price: 299.99, amount: 0 },
    { name: 'HP Pavilion 15 Laptop', price: 799.99, amount: 12 },
    { name: 'Canon EOS R5 Full-Frame Mirrorless Camera', price: 3899.00, amount: 2 }
]


const bigThanZero = product => product.amount > 0
const getName = product => product.name

console.log(carts.filter(bigThanZero))
console.log(carts.filter(bigThanZero).map(getName))


Array.prototype.filters = function (fn) {
    let response = []
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this) == true)
        {
            response.push(this[i])
        }
    }
    return response
}

const func = product => product.price > 500

console.log(carts.filters(func))