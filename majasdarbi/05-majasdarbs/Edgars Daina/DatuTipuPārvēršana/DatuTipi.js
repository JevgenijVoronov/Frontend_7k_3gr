// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros



String(123)            //"123"
String(-12.3)       //"-12.3"
String(null)         //"null"
String(undefined)       //"undefined"
String(true)          //"true"
String(false)        //"false"
String(function () {})  //"function () {}"
String({})             //"{}" -> nepareizi
String({ key: 42 })     
String([])             //"[]" 
String([1, 2])         //"[1, 2]" 


Number("123")           //123
Number("123.4")        //123.4
Number("123,4")         //123,4 -> nepareizi
Number("")              //0
Number(null)            //NaN
Number(undefined)       //NaN
Number(true)            //NaN
Number(false)           //NaN
Number(function () {})  //NaN
Number({})              //NaN
Number([])              //0
Number([1])             //1
Number([1, 2])          //NaN


Boolean("")            //false 
Boolean("string")      //true 
Boolean("false")        //ture
Boolean(0)              //false
Boolean(42)             //true
Boolean(-42)            //true
Boolean(NaN)            //false
Boolean(null)           //false
Boolean(undefined)      //false
Boolean(function () {})  //false -> true??
Boolean({})             //false -> true??
Boolean({ key: 42 })    
Boolean([])             //false ->true?
Boolean([1, 2])     //true