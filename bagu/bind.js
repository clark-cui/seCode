/*实现bind*/
Function.prototype.myBind = function (context, ...outerArgs) {
  let fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...outerArgs, ...innerArgs])
  }
}


this.value = 2
var foo = {
  value: 1
};
var bar = function (name, age, school) {
  console.log(name) // 'An'
  console.log(age) // 22
  console.log(school) // '家里蹲大学'
}
var result = bar.myBind(foo, 'An') //预置了部分参数'An'
result(22, '家里蹲大学') //这个参数会和预置的参数合并到一起放入bar中

