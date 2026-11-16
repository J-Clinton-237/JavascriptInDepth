import http from 'node:http'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createReadStream } from 'node:fs'
import { sign } from 'node:crypto';


// import { displayFileSize } from './files.js'
// Note: In ES modules, __dirname is not available. We need to create it:
var size;

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer(function (req, res) {

    const obj = createReadStream(join(__dirname, 'info.json'));
    const stream = createReadStream(join(__dirname, 'file.txt'));

    stream.on('error', () => {
        res.writeHead(404);
        res.end('File Not Found')
    })

    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    //console.log(req.method)
    // stream.pipe(res);
    
    if (req.url === '/users') {
        console.log();
        obj.pipe(res);
    }
    if (req.url === '/pics') {
        res.end("");
    }
    //SignUp side
    if (req.method === 'POST' && req.url === '/signup') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            res.writeHead(200, {
                "content-type": "text/plain"
            })
            console.log(data)
            let set = data.split('&')
            console.log(set)
            set = set.filter(x => x.split('='))
            console.log(set)
            res.end("Signed Up Successfully")
        })
    }
})

server.listen(3000, () => {
    console.log("Open at http://localhost/3000");
})

/*async function displayFileSize(filepath) {
    try {
        const stats = await fs.stat(filepath)
        stats.isFile() // true
        stats.isDirectory() // false
        stats.isSymbolicLink() // false
        stats.size // 1024000 //= 1MB
        console.log(stats.size, 'bytes');
        size = stats.size;
    } catch (err) {
        if (err && err.code === "ENOENT") { console.error(`\nThere is an error: No such Directory as ${filepath}\nError Code:${err.code}`); }
    } finally {
        console.log("\nExecuted with success lol")
    }
}
displayFileSize('./NodeCode/file.txt')

const server = http.createServer((req, res) => {
    var size;
    res.statusCode = 200;
     res.end(`Size of the file is ${size}`);
})

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
    console.log(dirname(fileURLToPath(import.meta.url)));
    console.log(__dirname)
    console.log(size)
}) */