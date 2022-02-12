Function.prototype.myCall = function () {
  //第一个参数作为this,后面的参数作为args,shift之后，arguments就改变了
  const context = [].shift.call(arguments);
  const obj = context || window;
  obj.fn = this;
  res = obj.fn(...arguments)
  delete obj.fn;
  return res;
}

//用法：f.call(obj,arg1)
function f(a, b) {
  console.log(a + b)
  console.log(this.name)
}
let obj = {
  name: 1
}
f.myCall(obj, 1, 2) //否则this指向window

// 3 1

const context = [].shift.call(arguments);
const obj = context || window;
obj.fn = this;
let res = obj.fn(...arguments);
delete obj.fn;
return res;

const context = [].shift.call(arguments);
const obj = context || window;
obj.fn = this;
let res = obj.fn(...arguments);
delete obj.fn;
return res;