import fs from "node:fs/promises";
let fileContent = "";

async function fileRead(url) {
    try {

        fileContent = await fs.readFile(url, 'utf-8');
        console.log(fileContent)
    } catch (error) {
        console.error(error)
    }
}

async function addStuffToFile(url, content){
    try {
        await fs.appendFile(url, content, 'utf-8')
        console.log('append Success')
    } catch (error) {
        console.log(`Oops, Error ${error.cause}`)
    }
}

addStuffToFile('./file.txt', `\nYou can do mre than you have already done, believe in thy self`)
fileRead('./file.txt')