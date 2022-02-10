// const str = '12234abc56712'
// 编写一个函数, 返回字符串中的最长连续递增数字子序, 如上字符串返回结果应该为: '567'
// 时间复杂度优先解

// const func = (s) => {
//   let i = 1,
//     j = 0,
//     result = '';
//   for (i; i < s.length; i++) {
//     if (Number(s[i]) && Number(s[j]) && s[i] > s[i - 1]) {
//       let mid = s.slice(j, i + 1);
//       if (mid.length >= result.length) result = mid;
//     }else{
//       j=i;

//     }
//   }
//   return result;
// }
// const func = (s) => {
//   let i = 1,
//     j = 0,
//     result = '';
//   for (i; i < s.length; i++) {
//     if (Number(s[i]) && Number(s[j]) && s[i] > s[i - 1]) {
//       let mid = s.slice(j, i + 1);
//       if (mid.length >= result.length) result = mid;
//     }else{
//       j=i;

//     }
//   }
//   return result;
// }
const func = (s) => {
  let r = 1,
    l = 0,
    result = '';
  for (r; r < s.length; r++) {
    if (Number(s[r]) && Number(s[l]) && s[r] > s[r - 1]) {
      let mid = s.slice(l, r + 1);
      if (mid.length >= result.length) result = mid;
    } else {
      l = r
    }
  }
  return result;
}
let x = func('12234abc56712')
console.log(x)


