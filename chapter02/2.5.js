// **************************
// 2.5 プロパティへの参照はどのように解決されるのか
// **************************

const myArray = ['foo','bar'];
console.log(myArray);
console.log(myArray.join());
console.log(myArray.hasOwnProperty('join'));
console.log(myArray.toLocaleString());
console.log(myArray.hasOwnProperty('toLocaleString'));


