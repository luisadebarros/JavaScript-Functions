//blibioteca do própio node
const fs = require('fs')
const path = require('path')



const caminho = path.join(__dirname, 'data.txt')


function showContent(err, content) {
    console.log(content.toString())
}

// console.log("start")
// fs.readFile(caminho, showContent)
// fs.readFile(caminho, (_, content) => console.log(content.toString()))
// console.log("end")


console.log("start sync")
console.log(fs.readFileSync(caminho).toString)
console.log("end sync")
