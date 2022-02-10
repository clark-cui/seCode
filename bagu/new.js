
/*实现new */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHI = function () {
  console.log(`Hi,我是${this.name},今年${this.age}岁`);
}
let p1 = new Person('张三', '18');
p1.sayHI();


// my new
function myNew() {
  let obj = {};
  let fn = [].shift.call(arguments);
  obj.__proto__ = fn.prototype;
  const res = fn.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}
let p2 = myNew(Person, '李四', '20');
p2.sayHI();


