const fs = require('fs')
const path = require('path')


function ReadAFile(fileName) {
    const way = path.join(__dirname, fileName)

    return new Promise(resolve => resolve(fs.readFileSync(way).toString())       )
}


ReadAFile('data.txt')
.then(console.log)


