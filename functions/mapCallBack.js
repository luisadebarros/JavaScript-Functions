// Map

/***
 * [1,2,3].Map(fn(que vai tranformar esse array))
 * 
 * insert array => [3,2,4,5,6,3]
 *  (to down)
 * fn => el * 2
 *  (to down)
 * result array => [6,4,8,10,12,9]
 * 
 * 
 *  insert array => [ui, ai, sol, uva]
 *  (to down)
 * fn => el[0]
 *  (to down)
 * result array => [u, a, s, u]
 * 
 * 
 *  OBS: É SEMPRE GERANDO UM NOOOVBOOOOO ARRAY
 * 
 */


const nums = [9, 3, 5, 4, 7]
const num = [9, 28]
const double = (n, i) => n * 2 + i
// (numero, indice, array)
const doubleTwo = (n, i, a) => n * 2 + i + a.length
// map gera uma array[n] com o n do mesmo tamanho que foi inserido
console.log(nums.map(double))
console.log(nums.map(doubleTwo))
console.log(num.map(double))
console.log(num.map(doubleTwo))


const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
const FirstLetter = text => text[0]

console.log(names.map(FirstLetter))


const cart = [
    { name: 'Apple AirPods Pro', price: 249.00, amount: 10 },
    { name: 'Samsung Galaxy S21 Ultra 5G', price: 1199.99, amount: 5 },
    { name: 'Sony WH-1000XM4 Wireless Headphones', price: 348.00, amount: 8 },
    { name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con', price: 299.99, amount: 3 },
    { name: 'HP Pavilion 15 Laptop', price: 799.99, amount: 12 },
    { name: 'Canon EOS R5 Full-Frame Mirrorless Camera', price: 3899.00, amount: 2 }
];


console.log(cart.map(product => product.name))
// toFixed = 2 casas
console.log(cart.map(product => (product.price * product.amount).toFixed(2)))

Array.prototype.maps = function (ln) {
    let response = []
    for (let i = 0; i < this.length; i++) {
        response.push(ln(this[i], i, this))
    }
    return response
}

const products = product => (product.price * product.amount).toFixed(2)

console.log(cart.maps(products))

