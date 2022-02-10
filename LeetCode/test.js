const quick_sort = (q, l, r) => {
  console.log(q, l, r);
  if (l >= r) return;
  let i = l - 1,
    j = r + 1,
    x = q[l + r >> 1];
  while (i < j) {
    do i++; while (q[i] < x);
    do j--; while (q[j] > x);
    if (i < j) {
      let mid = q[i];
      q[i] = q[j];
      q[j] = mid;
    }
  }
  quick_sort(q, l, j), quick_sort(q, j + 1, r);
}

let arr = [1, 4, 2, 3];
quick_sort(arr, 0, arr.length - 1);
console.log(arr);


// 深入解析CSS
// logseq 10k 用户 