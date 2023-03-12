function generateNumbersIn(min, max, time){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const fat = max - min - 1
            const ale = parseInt(Math.random() * fat) + min
            resolve(ale)
        }, time)
    })
}


console.time('promise')

function generateALotOff () {
    return Promise.all(
        [
            generateNumbersIn(1, 60, 4000),
            generateNumbersIn(1, 60, 1000),
            generateNumbersIn(1, 60, 500),
            generateNumbersIn(1, 60, 3000)
        ])
}

// generateALotOff()
//     .then(console.log)
//     .then(() => { 
//         console.timeEnd('promise')
//     })




function WorkOrNot(value, errorChance){
    return new Promise((resolve, reject) => {

        try {
            con.log('temp')
            if(Math.random() < errorChance){
                reject('Ocorrue an error')
            } else {
                resolve(value)
            }
        } catch (error) {
            reject(error)
        }
    })
}

WorkOrNot('Testing...', 0.9)
.then(v => console.log(`Value: ${v}`))
.then(v => console.log(v), err => console.log(`Errp Esp.: ${err}`))
.catch(err => console.log(`Error: ${err}`))
.then(() => console.log('end.'))


