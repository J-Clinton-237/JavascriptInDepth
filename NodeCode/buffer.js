import { createServer } from 'node:http'
import { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'


console.log(Buffer.from('FreeCodeCamp'))
let buff = Buffer.alloc(1);
buff.write('FreeCodeCamp')
console.log(buff.toString('utf-8'))

async function fileRead() {
    let fileHandle = await fs.open('./file.txt','r')
    console.log( await fileHandle.readFile('utf-8'))
    fileHandle.close()

    //console.log(typeof textBuffer, textBuffer.toString('utf-8'), textBuffer.byteLength)
}
fileRead()


/*
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\\n')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})*/
