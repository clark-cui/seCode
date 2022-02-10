/*深浅拷贝*/
//深拷贝和浅拷贝只针对像Object和Array这样的复杂对象的，String,Number等简单类型不存在深拷贝

//浅拷贝
Object.assign(target, ...sources);

//深拷贝
//JSON.stringify()

function deepClone(newObj, oldObj) {
  for (let k in oldObj) {
    let item = oldObj[k];
    if (item instanceof Array) {
      newObj[k] = [];
      deepClone(newObj[k], item)
    } else if (item instanceof Object) {
      newObj[k] = {};
      deepClone(newObj[k], item);
    } else {
      newObj[k] = item
    }
  }
}