// **************************
// 1.10 プリミティブ値は、値そのものを比較
// **************************

const price01 = 10;
const price02 = 10;
const price03 = new Number('10');
const price04 = price03;

console.log('price01との比較');
console.log(price01 === price02);
console.log(price01 === price03);
console.log(price01 === price04);

console.log('price02との比較');
console.log(price02 === price03);
console.log(price02 === price04);

console.log('price03との比較');
console.log(price03 === price04);

