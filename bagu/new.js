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
  let fn = [].shift.call(arguments); //取第一个参数，是fn
  //shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度
  obj.__proto__ = fn.prototype;
  // const args=[...arguments].slice(1)
  // const res = fn.apply(obj, args)
  const res = fn.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}
let p2 = myNew(Person, '李四', '20');
p2.sayHI();


function myNew() {
  let obj = {};
  let fn = [].shift.call(arguments);
  obj.__proto__ = fn.prototype;
  let res = fn.apply(obj, arguments);
  return typeof res === 'object' ? res : obj
}


// const quick_sort = (q, l, r) => {
//   if (l >= r) return;
//   let i = l - 1,
//     r = j + 1,
//     x = q[l + r >> 1];
//   while (i < j) {
//     do i++; while (q[i] < x);
//     do j--; while (q[j] > x);
//     if (i < j) {
//       let mid = q[i];
//       q[i] = q[j];
//       q[j] = mid;
//     }
//   }
//   quick_sort(q, l, j), quick_sort(q, j + 1, r);
// }

// const merge_sort = (q, l, r) => {
//   if (l >= r) return;
//   let mid = l + r >> 1;
//   merge_sort(q, l, mid), merge_sort(q, mid + 1, r);
//   let tmp = [],
//     k = 0,
//     i = 0,
//     j = mid + 1;

//   while (i <= mid && j <= r) {
//     if (q[i] <= q[j]) {
//       tmp[k++] = q[i++]
//     } else {
//       tmp[k++] = q[j++]
//     }
//   }
//   while (i <= mid) {
//     tmp[k++] = q[i++]
//   }
//   while (j <= r) {
//     tmp[k++] = q[j++]
//   }
//   i = l, j = 0;
//   while (i <= r) {
//     q[i++] = tmp[j++]
//   }

// }

// function myNew() {
//   let obj = {}
//   let fn = [].shift.call(arguments);
//   obj.__proto__ = fn.prototype;
//   let res = fn.apply(obj, arguments);
//   return typeof res === 'object' ? res : obj;
// }