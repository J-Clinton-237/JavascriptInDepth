export function count(params) {
    var count = params;
    console.log(count, 'second passed');
    var intervalObject = setInterval(function () {
        count++;
        console.log(count, 'seconds passed');
    }, 1000);

    setTimeout(() => {
        console.log('exiting');
        clearInterval(intervalObject);
    }, 5000);

}

export function display(message) {
    return new Promise((res) =>{
        setTimeout(() => {
            console.log("Hello the message is: ", message);
            res(13)
        }, 6000);
    })
}