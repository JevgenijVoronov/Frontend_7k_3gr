// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros

String(123); //"123"
String(-12.3); //"-12.3"
String(null); //"null"
String(undefined); //"undefiden"
String(true); //"true"
String(false); //"false"
String(function () {}); //"function () {}"
String({}); //"{object}"
String({ key: 42 }); //"{object: 42}" ...šeit īsti nesaprotu, kāpēc pārvēršās par diviem "[object Object]" un kvadrātiekavām
String([]); //"undefined"
String([1, 2]); //"1, 2"

Number("123"); // 123
Number("123.4"); // 123.4
Number("123,4"); // NaN
Number(""); // 0 ... nesaprotu, kāpēc šis ir 0?? likās būs NaN
Number(null); // 0
Number(undefined); // Nan
Number(true); // 1 ... nesaprotu, kāpēc 1? likās būs 0
Number(false); // 0 ... nesaprotu, kāpēc 0? likās būs NaN
Number(function () {}); // NaN
Number({}); // NaN ... jo object properties are written as Names??
Number([]); // 0 ... jo array indexes are 0 based??
Number([1]); // 1
Number([1, 2]); // NaN ... nevar izveidoties numurs, jo ir komats kā string elementam?

Boolean(""); // false
Boolean("string"); // true
Boolean("false"); // true
Boolean(0); // false
Boolean(42); // true
Boolean(-42); // true
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(function () {}); // true ... šo es laikam īsti nesaprotu
Boolean({}); // true
Boolean({ key: 42 }); // true
Boolean([]); // true
Boolean([1, 2]); // true
