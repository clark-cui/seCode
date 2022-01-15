const quick_select = (q, l, r, k) => {
  if (l >= r) return q[l];

  let i = l - 1,
    j = r + 1,
    x = q[l + r >> 1];
  while (i < j) {
    do i++; while (q[i] < x);
    do j--; while (q[j] > x);
    if (i < j) {
      let mid = q[i];
      q[i] = q[j];
      q[j] = mid
    }
  }

  let Sl = j - l + 1;
  if (Sl >= k) return quick_select(q, l, j, k);
  return quick_select(q, j + 1, r, k - Sl)
}
// console.log(quick_select([2, 4, 1, 5, 3], 0, 4, 3));