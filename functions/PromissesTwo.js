// setTimeout(function () {
//     console.log('Executing Callback')
//     setTimeout(() =>  {
//         console.log('Executing Callback')
//         setTimeout(() =>  {
//             console.log('Executing Callback')
//         }, 2000)
//     }, 2000)
// }, 2000)



function watingFor(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => {
           
            resolve('')
        }, tempo)
    })
}



// watingFor().then(() => watingFor).then(watingFor)



function generateNumbersIn(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fat = max - min - 1
        const ale = parseInt(Math.random() * fat) + min
        resolve(ale)
        })
}


generateNumbersIn(10, 50)
    .then(num => num * 10)
    .then(num10 => `O número gerado foi ${num10}`)
    .then(console.log)
    
    

