// Need add switch.js and CV.js tasks V.F.


// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros

console.log(String(123)); //"123"
console.log(String(-12.3)); //"-12.3"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(true)); //"true"
console.log(String(false)); //"false"
console.log(String(function () {})); //"function () {}"
console.log(String({})); //object
console.log(String({ key: 42 })); //object
console.log(String([])); //""
console.log(String([1, 2])); //"1,2"

console.log(Number("123")); //123
console.log(Number("123.4")); //123.4
console.log(Number("123,4")); //NaN
console.log(Number("")); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(function () {})); //NaN
console.log(Number({})); //NaN
console.log(Number([])); //0
console.log(Number([1])); //1
console.log(Number([1, 2])); //NaN

console.log(Boolean("")); //false
console.log(Boolean("string")); //true
console.log(Boolean("false")); //true
console.log(Boolean(0)); //false
console.log(Boolean(42)); //true
console.log(Boolean(-42)); //true
console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(function () {})); //true
console.log(Boolean({})); //true
console.log(Boolean({ key: 42 })); //true
console.log(Boolean([])); //true
console.log(Boolean([1, 2])); //true
