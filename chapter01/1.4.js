// **************************
// 1.4 ユーザー定義の（ネイティブではない）コンストラクタ関数
// **************************

const Person = function(living,age,gender){
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() {return this.gender;}
};
const cody = new Person(true,33,'male');
console.log(cody);
const lisa = new Person(true,34,'female');
console.log(lisa);

