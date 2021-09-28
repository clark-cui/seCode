/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 快排，用于末尾的排序
const quick_sort = (q, l, r) => {
  if (l >= r) return;
  let i = l - 1,
    j = r + 1,
    x = q[(l + r) >> 1];
  while (i < j) {
    do i++;
    while (q[i] < x);
    do j--;
    while (q[j] > x);
    if (i < j) {
      let left = q[i];
      q[i] = q[j];
      q[j] = left;
    }
  }
  quick_sort(q, l, j), quick_sort(q, j + 1, r);
};
//暴力两个循环嵌套就可解决，但是用hashMap可以少一个循环
const relativeSortArray = (arr1, arr2) => {
  let result = [];
  // 用map简化复杂度
  let hashMap = new Map();
  // 遍历arr1,把值做key,出现的次数做value存在hashMap
  for (let i = 0; i < arr1.length; i++) {
    if (hashMap.has(arr1[i])) {
      hashMap.set(arr1[i], hashMap.get(arr1[i]) + 1);
    } else {
      hashMap.set(arr1[i], 1);
    }
  }
  //遍历arr2,hashMap中取出arr2[i]，根据次数，依次填入result
  for (let j = 0; j < arr2.length; j++) {
    if (hashMap.has(arr2[j])) {
      while (hashMap.get(arr2[j]) > 0) {
        result.push(arr2[j]);
        hashMap.set(arr2[j], hashMap.get(arr2[j]) - 1);
      }
    }
  }
  let outArr = [];
  //遍历hashMap,取出剩下的值存入outArr
  for (let key of hashMap.keys()) {
    while (hashMap.get(key) > 0) {
      outArr.push(key);
      hashMap.set(key, hashMap.get(key) - 1);
    }
  }
  //用快排给outArr排序
  quick_sort(outArr, 0, outArr.length - 1);
  // 把result和outArr拼接起来（注意不要用+，js数组的加法表现比较奇怪）
  result = result.concat(outArr);
  return result;
};