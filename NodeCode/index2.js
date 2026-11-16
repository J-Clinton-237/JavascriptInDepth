import {count, display} from './index.js';
count(1);

(async () => {
    console.log('I am waiting I guess');
    var value = await display("Hello man. Keep learning.");
})();


