// function declartion

function sayHello(){
    console.log('Hello!')
}

sayHello()

function sayHelloTo(name){
    // simbolo da crase
    console.log(`Hello ${name}!`)
}

sayHelloTo('Louis')

function returnHi(){
    return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())
function returnHiTo(name){
    return `Hellos ${name}!`
}

console.log(returnHiTo('Me'))
