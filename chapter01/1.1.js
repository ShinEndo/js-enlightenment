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

const Person = function(living,age,gender){
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() {return this.gender;}
};

const cody_01 = new Person(true,33,'male');
console.log(cody_01);


