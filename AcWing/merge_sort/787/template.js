//解法1
const merge_sort = (q, l, r) => {
  if (l >= r) return;
  let mid = l + r >> 1;
  merge_sort(q, l, mid), merge_sort(q, mid + 1, r);
  let temp = [],
    k = 0,
    i = l,
    j = mid + 1;
  while (i <= mid && j <= r) {
    if (q[i] <= q[j]) temp[k++] = q[i++]
    else temp[k++] = q[j++]
  }
  while (i <= mid) temp[k++] = q[i++]
  while (j <= r) temp[k++] = q[j++]
  for (i = l, j = 0; i <= r; i++, j++)
    q[i] = tmp[j];

  // debug current file 看看为啥这里要一个新的j值而不是像下面这行代码一样直接i
  //for (let i = l, j = 0; i <= r; i++, j++) q[i] = tmp[i]

}
// let arr = [3, 1, 2, 4, 5]
// merge_sort(arr, 0, 4);
// console.log(arr);


//解法2：不同点是最后用while替代for循环。for循环与while本来就是等价的
const merge_sort = (q, l, r) => {
  if (l >= r) return;
  let mid = l + r >> 1;
  merge_sort(q, l, mid), merge_sort(q, mid + 1, r);

  let temp = [],
    k = 0,
    i = r,
    j = mid + 1;
  while (i <= mid && j <= r) {
    if (q[i] < q[j]) temp[k++] = q[i++]
    else temp[k++] = q[j++]
  }
  while (i <= mid) temp[k++] = q[i++];
  while (j <= r) temp[k++] = q[j++];

  i = l, j = 0;
  while (i <= r)
    q[i++] = temp[j++]
}