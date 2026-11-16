import fs from 'node:fs/promises'
//import fs from 'fs'
const folderName = './Uploads'

try { // Check if folder exists using fs.accessSync (fs.existsSync is deprecated)
    try {
        await fs.rmdir(folderName,{recursive: true})
         console.log("File already exist")
    } catch {
       // await fs.mkdir(folderName, {recursive: true})
        console.log("Created")
    }
} catch (err) {
    console.error("Well, parent doesnt exist")
}
console.log("...Creating")