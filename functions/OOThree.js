// constructor fucntion
function Product (name, price, desc = 0.10) {
    this.name = name,
    this.price = price
    this._desc = desc
    // esse let só é disponivel na function
    this.finalPrice =  () => this.price * (1 - this._desc)
}

Product.prototype.log = function () {
    console.log(`Name: ${this.name}\nPrice: ${this.price} `)
}

Object.defineProperty(Product.prototype, 'desc', {
    get: function () {
        return this._desc
    },
    set: function (newDesc) {
        if (newDesc >= 0 && newDesc <= 1) {
            this._desc = newDesc
        }
    }
})

Object.defineProperty(Product.prototype, 'descString', {
    get: function() {
        return `${this._desc}% of discount.`
    }
})

const p1 = new Product('Pen', 2.99, 0.05)
const p2 = new Product('Refrigerator', 563.99, 0.2)

p1.log()
console.log(p1.desc)
console.log(p1.descString)
p1.desc = 0.99
console.log(p1.desc)
console.log(p1.descString)

console.log('\n')

p2.log()
console.log(p2.desc)
console.log(p2.descString)
p2.desc = 0.77
console.log(p2.desc)
console.log(p2.descString)
