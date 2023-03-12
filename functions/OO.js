// constructor fucntion
function Product (name, price, desc = 0.10) {
    this.name = name,
    this.price = price
    this.desc = desc
    // esse let só é disponivel na function
    this.finalPrice =  () => this.price * (1 - this.desc)
}

const p1 = new Product('Pen', 2.99, 0.05)
const p2 = new Product('Refrigerator', 563.99, 0.2)

console.log(p1.name)
console.log(p2.name)
console.log(p1.private)
console.log(p1.priv)

console.log('\n')

console.log(p1.name + ": " + p1.finalPrice().toFixed(2))
console.log(p2.name + ": " + p2.finalPrice().toFixed(2))

console.log('\n')
