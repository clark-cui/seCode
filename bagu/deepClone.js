/*深浅拷贝*/
//深拷贝和浅拷贝只针对像Object和Array这样的复杂对象的，String,Number等简单类型不存在深拷贝

//浅拷贝
// Object.assign(target, ...sources);

//深拷贝

//方法一：JSON.stringify()

//方法二：
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

let obj = {
  id: 1,
  name: 'Tom',
  msg: {
    age: 18
  }
}
let o = {}
deepClone(o, obj);
console.log(o);


function deepc(newObj,oldObj){
  for(let key in oldObj){
    if(oldObj[k] instanceof Array){
      deepc(newObj[k],oldObj[k])
    }else if (){}
    else{
      newObj[k]=oldObj[k]
    }
  }
}

function deepc(newObj,oldObj){
  for(let key in oldObj){
    if(oldObj[key] instanceof Array){
      newObj[key]=[];
      deepClone(newObj[key],oldObj[key])
    }else if ()
  }
}