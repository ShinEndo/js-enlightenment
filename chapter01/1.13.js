// **************************
// 1.13 オブジェクトはどのように保存・複製されるか
// **************************

const myObject = {};
const copyMyObject = myObject;
myObject.foo = 'bar'; 

console.log(myObject,copyMyObject);

