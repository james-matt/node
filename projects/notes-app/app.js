// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.js')
// fs.appendFileSync('notes.txt', ' My name is James.')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)