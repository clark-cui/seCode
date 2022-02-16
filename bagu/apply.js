Function.prototype.myApply = function () {
  //取参数第一项做this
  const context = [].shift.call(arguments);
  let obj = context || window;
  obj.fn = this;
  // 只剩下一个arguments,arguments[0]，是一个数组
  let res = obj.fn(...arguments[0]);
  delete obj.fn;
  return res
}

function f(a, b) {
  console.log(a, b)
  console.log(this.name)
}
let obj = {
  name: '张三'
}
f.myApply(obj, [1, 2]) //arguments[1]


