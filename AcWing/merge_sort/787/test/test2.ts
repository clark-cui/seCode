const merge_sort_ts = (q, l, r) => {
  if (l >= r) return;
  let mid = l + r >> 1;
  merge_sort_ts(q, l, mid), merge_sort_ts(q, mid + 1, r);

  let i = l,
    j = mid + 1,
    k = 0,
    tmp = [];
  while (i <= mid && j <= r) {
    if (q[i] <= q[j]) tmp[k++] = q[i++];
    else tmp[k++] = q[j++];
  }
  while (i <= mid) tmp[k++] = q[i++];
  while (j <= r) tmp[k++] = q[j++];

  for (let i = l, j = 0; i <= r; i++, j++) q[i] = tmp[j];
};

// let arr = [3, 1, 2, 4, 5];
// merge_sort_ts(arr, 0, 4);
// console.log(arr);
