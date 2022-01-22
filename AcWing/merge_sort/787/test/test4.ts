const merge_sort_ts3 = (q, l, r) => {
  if (l >= r) return;
  let mid = (l + r) >> 1;
  merge_sort_ts3(q, l, mid), merge_sort_ts3(q, mid + 1, r);

  let i = l,
    j = mid + 1,
    tmp = [],
    k = 0;
  while (i <= mid && j <= r) {
    if (q[i] <= q[j]) tmp[k++] = q[i++];
    else tmp[k++] = q[j++];
  }
  while (i <= mid) tmp[k++] = q[i++];
  while (j <= r) tmp[k++] = q[j++];

  for (let a = l, b = 0; a <= r; a++, b++) q[a] = tmp[b];
};
let arr = [3, 1, 2, 4, 5];
merge_sort_ts3(arr, 0, 4);
console.log(arr);
