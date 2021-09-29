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
  for (let i = l, j = 0; i <= r; i++, j++)
    q[i] = temp[j]
}