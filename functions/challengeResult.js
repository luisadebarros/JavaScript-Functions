function calcular(x) {
    return function (y) {
        return function(fn) {
            return fn(x,y)
        }
    }
}

function soma(x, y) {
    return x + y
}

const r1 = calcular(3)(4)(soma)
console.log(r1)