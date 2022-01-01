const quick_sort = (q, l, r) => {
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
// this is a final test maybe.