class Product{
    constructor(name, price, desc){
        this._name = name
        this.price = price
        this.desc = desc
    }

    finalPrice() {
        return this.price * (1 - this.desc)
    }

    get name() {
        return `Product: ${this._name}`
    }

    set name(newName) {
        this._name = newName.toUpperCase()
    }
}

const p1 = new Product('Pen', 2.99, 0.05)
const p2 = new Product('Refrigerator', 563.99, 0.2)

p1.name = 'penz'

console.log(p1.name + ": " + p1.finalPrice().toFixed(2))
console.log(p2.name + ": " + p2.finalPrice().toFixed(2))