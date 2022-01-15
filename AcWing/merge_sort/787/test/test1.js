const merge_sort = (q, l, r) => {
  if (l >= r) return;
  let mid = l + r >> 1;
  merge_sort(q, l, mid), merge_sort(q, mid + 1, r);

  let k = 0,
    i = l,
    j = mid + 1;
  let tmp = [];
  while (i <= mid && j <= r) {
    if (q[i] <= q[j]) tmp[k++] = q[i++]
    else tmp[k++] = q[j++]
  }
  while (i <= mid) tmp[k++] = q[i++]
  while (j <= r) tmp[k++] = q[j++]

  for (i = l, j = 0; i <= r; i++, j++) q[i] = tmp[j];
}