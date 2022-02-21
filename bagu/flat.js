/*数组扁平化*/
let a = [1, [2, 3, [4, [5]]]];
a.flat(Infinity); // [1,2,3,4,5]  a是4维数组
console.log(a.flat(Infinity));
let arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function myFlat(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(myFlat(arr[i]))
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(myFlat(arr1));

let res =[];
for(let i =0;i<arr.length;i++){
  if(Array.isArray(arr[i])){
    res=res.concat(myFlat(arr[i]));

  }else{
    res.push(arr[i])
  }
  return res;
}