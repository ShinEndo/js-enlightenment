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

