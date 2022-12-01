/**
 * Reduce => (acumulador, elementoAtual) => total + el 
 * com valor incial => total = valor incial
 * é um acumulador!
 * sem valor inicial => 1 é o total e o 2 da posição
 * que está
 */

 const numbers = [1, 2, 3, 4, 5, 6]

 const sum = (total, el) => total + el
 // o 100 é onde começa
 const total = numbers.reduce(sum, 100)
 console.log(total)

 const media = (acc, el, i, array) => {
        if(i === array.length - 1){
            return (acc + el) / array.length
        } else {
            return acc + el
        }
 }
 const result = numbers.reduce(media)
 console.log(result)
