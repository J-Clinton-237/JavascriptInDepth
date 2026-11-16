import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {name as n} from './events.js';

const readline = createInterface({ input, output })
const answer = await readline.question('What is your name? ')
console.log(`Hello ${answer}:${n}!`);
readline.close();