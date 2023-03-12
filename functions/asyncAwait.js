
async function watingFor(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Executed')
        }, tempo)
    })
}


watingFor(2000)
    .then(console.log('Async Test'))
    .then(watingFor(1500))
    

    
    
function retuneValue() {
    return new Promise (resolve => 
        {
            setTimeout(() => resolve(10), 3000)
        })
}


async function execute() {
    
    let value = await retuneValue()

    await watingFor(1500)
    console.log(`Asycn 1 ${value}`)
    await watingFor(600)
    console.log(`Asycn 2 ${value + 1}`)
    await watingFor(900)
    console.log(`Asycn 3 ${value + 2}`)

    return value + 3
}


async function ExecutingTrue()
{
    const value = await execute() 
    console.log(value)
}

ExecutingTrue()