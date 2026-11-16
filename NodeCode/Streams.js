import { Stream, Transform } from 'node:stream'

const Readeable = new Stream.Readable({ read() { } })
const writableStream = new Stream.Writable()
const transformStream = new Transform()

transformStream._transform = (chunk, encoding, callback) => {
    transformStream.push(chunk.toString().toUpperCase())
    callback()
}


writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

/*
Readeable.on('data',(chunk)=>{
    console.log(chunk.toString())
}) 
*/

Readeable.push('Hi I am clinton')
Readeable.push('Hi I am clinton')
Readeable.push('Hi I am clinton')
Readeable.push('Hi I am clinton')
Readeable.push('Hi I am clinton')
Readeable.push('Hi I am clinton')

Readeable.pipe(transformStream).pipe(writableStream)

writableStream.write("This is Hard Sync Code")

Readeable.on('close', () => writableStream.end())
writableStream.on('close', () => console.log('ended'))

Readeable.destroy()





