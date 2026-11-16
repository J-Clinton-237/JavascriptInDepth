//console.log((8).toString(2));
//console.log(parseInt(1001,2));
//console.log(3 + true + true)
/*
function isReallyNaN(x) {
    return x !== x;
}
var foo = NaN;
console.log(isReallyNaN(foo))

var obj = {"Name":"JCTC"}
console.log("Output is ",JSON.stringify(obj)," and of type: ",typeof JSON.toString(obj))
*/

const object = {
    toString: function(){
        return "Jeff Clinton";
    },
    valueOf: function(){
        return 18;
    }
}
const obj2 = {"name":"JC",toString(){
    return "Jeff Clinton TC"
}}
console.log(2*object);
console.log("My name is",String(obj2));