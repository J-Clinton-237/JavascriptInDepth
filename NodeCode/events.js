//import { createInterface } from 'node:readline/promises';
//import { stdin as input, stdout as output } from 'node:process';
//import EventEmitter from 'node:events';
import { EventEmit } from './breakingEvents.js';

//Events are useful in the sense that the system can respond to something a user has done
// But its ususally mapped with string keywords as shown below

/*
const readline = createInterface({ input, output })
const answer = await readline.question('What is your event? ')
readline.close();

const event = new EventEmitter;
event.on('start', () => {
    console.log('Hey, I was started');
})
event.on('copy', () => {
    console.log('Hey, I was copied');
})

event.emit(answer); */

let event = new EventEmit;

event.on('login',(user)=>{
    console.log(`${user} just Logged in`)
})

event.emit('login','Jeff Clinton Toh')


event.on('signup',()=>{
    console.log(`A Newbie just Logged in`)
})

event.emit('signup')