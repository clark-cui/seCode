// const str = '12234abc56712'
// 编写一个函数, 返回字符串中的最长连续递增数字子序, 如上字符串返回结果应该为: '567'
// 时间复杂度优先解


// const getChildString = (s) => {
//   let l, r = 0,
//     result = '';
//   while (r < s.length) {
//     r++;
//     if (Number(s[l]) && Number(s[r]) && s[r] > s[r - 1]) {
//       let middle = s.slice(l, r + 1);
//       if (middle.length >= result.length) {
//         result = middle;
//       }
//     } else {
//       l = r;
//     }
//   }
//   return result;
// }
// const x = getChildString('12234abc56712')
// console.log(x);


// const get = (s) => {
//   let l = 0,
//     r = 0,
//     answer = '';
//   while (r < s.length) {
//     r++;
//     if (Number(q[l]) && Number(q[r]) && q[r] > q[r - 1]) {
//       let middle = s.slice(l, r + 1);
//       if (middle.length >= s.length) {
//         result = middle;
//       }
//     } else {
//       l = r
//     }

//   }

// }

// const quick_sort = (q, l, r) => {
//   if (l >= r) return
//   let i = l - 1,
//     j = r + 1,
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

// const merge_sort = (q, l, r, ) => {
//   if (l >= r) return;
//   let mid = l + r >> 1;
//   merge_sort(q, l, mid), merge_sort(q, mid + 1, r);

//   let k = 0,
//     tmp = [],
//     i = l,
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
//   for (let i = l, j = 0; i < r; i++, j++) {
//     q[i] = tmp[j]
//   }
// }

// const get = (s) => {
//   let l = 0,
//     r = 0,
//     result = '';
//   while (r < s.length) {
//     r++;
//     if (Number(s[l]) && Number(s[r]) && s[r] > s[r - 1]) {
//       result = s.slice(l, r + 1)
//     } else {
//       l = r
//     }
//   }
//   return result;
// }
// 写法1
const getChildString = (s) => {
  let result = '',
    l = 0;
  for (let r = 0; r < s.length; r++) {
    if (Number(s[l]) && Number(s[r]) && s[r] > s[r - 1]) {
      let middle = s.slice(l, r + 1);
      if (middle.length >= result.length) {
        result = middle;
      }
    } else {
      l = r
    }
  }
  return result;
}
// tongy
const getChildString = (s) => {
  let result = '',l=0;
  for (let r = 1; r < s.length; r++) {
    while (l<r&&Number(s[l]) && Number(s[r]) && s[r] > s[r - 1]) {
      l++;
    }
    let middle = s.slice(l, r);
    if (middle.length >= result.length) {
      result = middle;
    }
    l = r;
  }
  return result;
}
const x = getChildString('12234abc56712')
console.log(x);