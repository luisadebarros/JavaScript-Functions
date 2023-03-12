function generateNumbersIn(min, max, bannedNumbers){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fat = max - min + 1
            const random = parseInt(Math.random() * fat) + min
            if(bannedNumbers.includes(random)){
                reject(`Repetitive Number! (${random})`)
            } else {
                resolve(random)
            }
        })
    })
}


// generateNumbersIn(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)

async function generateMegaSena(qtdeNumber, attemps = 1) {
    try {
        const numbers = []
        for (let _ of Array(qtdeNumber).fill()) {
            numbers.push(await generateNumbersIn(1, 60, numbers))
        }
        return numbers    
    } catch (error) {
        if(attemps > 10){
            generateMegaSena(qtdeNumber, attemps)
        } else {
            throw 'What a mess!'
        }        

    }
    
}

generateMegaSena(10)
    .then(console.log)
    .catch(console.log)