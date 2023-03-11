const cart = [
    { name: 'Apple AirPods Pro', price: 249.00, amount: 10, fragil: false },
    { name: 'Samsung Galaxy S21 Ultra 5G', price: 1199.99, amount: 5, fragil: true },
    { name: 'Sony WH-1000XM4 Wireless Headphones', price: 348.00, amount: 8, fragil: true },
    { name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con', price: 299.99, amount: 3, fragil: false },
    { name: 'HP Pavilion 15 Laptop', price: 799.99, amount: 12, fragil: false },
    { name: 'Canon EOS R5 Full-Frame Mirrorless Camera', price: 3899.00, amount: 1, fragil: true }
];

// just the elements with fragil = true
// qtde and price
// media dos valores

const isFragil = cart.filter(product => product.fragil == true)
//console.log(isFragil)

const getTotal = cart.map(product => product.price.toFixed(0) * product.amount)
//console.log(getTotal)


const media = (acc, el) => acc + el/cart.length
const mediaAll = getTotal.reduce(media)
//console.log(mediaAll)



const certo = cart
            .filter(item => item.fragil)
            .map(item => item.amount.toFixed(0) * item.price)
            .reduce((acc, el) => {
                const newQtde = acc.qtde + 1
                const newTotal = acc.total + el
                return {
                    qtde: newQtde,
                    total: newTotal,
                    media: newTotal / newQtde
                }
 
            }, {qtde: 0, total: 0, media: 0}).media.toFixed(2)

console.log(certo)


