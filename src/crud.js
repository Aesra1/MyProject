const fs = require('fs')
const path = require('path')

let pathName = path.join(__dirname, 'Files')

let fileName = localStorage.getItem('fileName')
let fileContents = localStorage.getItem('fileContents')

document.getElementById('displayFileName').textContent = fileName
document.getElementById('displayFileContents').textContent = fileContents

localStorage.removeItem('fileName')
localStorage.removeItem('fileContents')
// read function
document.getElementById('btnRead').addEventListener('click', function() {
    let inputFileName = document.getElementById('inputFileName').value
    let file = path.join(pathName, `${inputFileName}.txt`)

    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            return console.log(err)
        }
        document.getElementById('displayFileName').textContent = inputFileName
        document.getElementById('displayFileContents').textContent = data
        document.getElementById('fileContents').value = data
        console.log("The file was read!")
    })
})
// update function
document.getElementById('btnUpdate').addEventListener('click', () => {
    let newContent = document.getElementById('fileContents').value
    let filePath = path.join(pathName, `${fileName}.txt`)

    fs.writeFile(filePath, newContent, (err) => {
        if (err) {
            return console.error('Error updating file:', err)
        }
        alert(`${fileName}.txt has been updated successfully!`)
        document.getElementById('displayFileContents').textContent = newContent
    })
})

// delete function
document.getElementById('btnDelete').addEventListener('click', () => {
    let inputFileName = document.getElementById('inputFileName').value
    if (!inputFileName) {
        alert("Please enter a file name")
        return
    }
    let filePath = path.join(pathName, `${inputFileName}.txt`)

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err)
            alert('Error deleting file. Please check the file name and try again.')
            return
        }
        alert(`${inputFileName}.txt has been deleted successfully!`)
        document.getElementById('displayFileName').textContent = ''
        document.getElementById('displayFileContents').textContent = ''
        document.getElementById('fileContents').value = ''
    })
})
