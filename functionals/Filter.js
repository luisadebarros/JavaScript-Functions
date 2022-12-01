/**
 * filter => a resposta dessa função será
 * true ou false, se true - irá para o array
 * resultante, false - não irá para o array
 * resultante
 */

/**
 * [1, 2, 3, 4, 5] -> fn(el) => el > 10 -- all false
 * [1, 2, 3, 4, 5] -> fn(el) => el > 0 -- all true
 * [1, 2, 3, 4, 5] -> fn(el) => el % 2 == 0 
 * -- 2, 4 - true 
 * -- 1, 3, 5 - false
 */
 const numbers = [1, 2, 3, 4]

 const students = [
     {name: 'Luísa', score: 7.4},
     {name: 'Vini', score: 4.9},
     {name: 'Pedro', score: 9.3},
     {name: 'Júlia', score: 3.8}
 ]

 const greaterThatZero = el => el > 0
 const greaterThatTen = el => el > 10
 const even = el => el % 2 == 0

 console.log(numbers.filter(greaterThatZero))
 console.log(numbers.filter(greaterThatTen))
 console.log(numbers.filter(even))

 const greatStudents = student => student.score >= 9
 console.log(students.filter(greatStudents))

 console.log(students)

