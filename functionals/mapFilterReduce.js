const students = [
    {name: 'Luísa', score: 7.4},
    {name: 'Vini', score: 4.9},
    {name: 'Pedro', score: 9.3},
    {name: 'Júlia', score: 10}
]

const getScore = el => el.score
const greatScore = student => student.score >= 9

const media = (acc, el, i, array) => {
    if(i === array.length - 1){
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}


console.log(
    students
        .filter(greatScore)
        .map(getScore)
        .reduce(media)
)
    