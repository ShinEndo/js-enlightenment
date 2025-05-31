// **************************
// 1.9 プリミティブ値はどのように保存・複製されるか
// **************************

var _myString = 'foo';
var _myStringCopy = _myString;
var _myString = null;
console.log(_myString,_myStringCopy);

let myString = 'foo';
let myStringCopy = myString;
myString = null;
console.log(myString,myStringCopy);

