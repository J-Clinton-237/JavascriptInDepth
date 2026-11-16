import fs from 'fs/promises';
import file from './info.json' with {type: "json"};
import EventEmitter from 'events';
import './jsonManipulator.js';


// In this file I am practicing some File Manipulation methods in Node
async function viewAndLogFile(filepath, message) {
    let filehandle;
    try {
        filehandle = await fs.open('./JS/file.txt', 'r');
        console.log(await filehandle.readFile({ encoding: 'utf8' }))
        
    } catch (err) {
        console.log(`There is a problem: ${err}`);
    }
    finally {
        fs.appendFile('./NodeCode/file.txt', `${message}\n`);
        await filehandle.close()
    }
}
export async function displayFileSize(filepath) {
    try {
        const stats = await fs.stat(filepath)
        stats.isFile() // true
        stats.isDirectory() // false
        stats.isSymbolicLink() // false
        stats.size // 1024000 //= 1MB
        console.log(stats.size, 'bytes');
        return stats.size;
    } catch (err) {
        if (err && err.code === "ENOENT") { console.error(`\nThere is an error: No such Directory as ${filepath}\nError Code:${err.code}`); }
    } finally {
        console.log("\nExecuted with success lol")
    }
}

//Event emitter
const event1 = new EventEmitter;
event1.on('active', () => {
    //console.log(`${file.Name} is Active now.`)
})
//Event trigger
event1.on('inactive', () => {
    //console.log(`${file.Name} is Not Active now.`)
})

//event1.emit(file.activeStatus);



//viewAndLogFile('./JS/file.txt','Customized the function a bit, nothing much');
//displayFileSize('./NodeCode/file.txt');
//console.log(file);