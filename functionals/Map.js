/**
 * map function => retorna um objeto com
 * exatamente o mesmo tamanho, onde transforma
 * cada um dos elementos e transforma em outra
 * coisa, para todos os elementos do array
 */

const numbers = [1, 2, 3, 4]

const students = [
    {name: 'Luísa', score: 7.4},
    {name: 'Vini', score: 4.9},
    {name: 'Pedro', score: 9.3},
    {name: 'Júlia', score: 3.8}
]

const numbersTwo =  numbers.map( el => el * 2)
console.log(numbers, numbersTwo)

const getScore = el => el.score
const studentsTwo = students.map(getScore)

console.log(studentsTwo, studentsTwo.map(Math.ceil))