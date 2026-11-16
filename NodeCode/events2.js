import { EventEmitter } from "node:events";
const e = new EventEmitter;

e.once('ok',()=>{
    console.log("Welcome to our system Sir. Sending Welcome Email ..... ");
})
e.emit('ok')
e.emit('ok')
e.emit('ok')