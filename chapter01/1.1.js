// **************************
// 1.1 オブジェクトの生成
// **************************

const cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() {
	return cody.gender;
}
console.log(cody.getGender());

const myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

const myString = new String('foo');
console.log(myString);


