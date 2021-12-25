const path = require('path')

console.log(path.sep);

const fileName = path.join("content","subFolder","test.txt")

console.log(fileName);

const base = path.basename(fileName)

console.log(base);

// const absolute = path.resolve(__dirname,"content","subFolder","test.txt")
const absolute = path.resolve(__dirname,fileName)

console.log(absolute);




