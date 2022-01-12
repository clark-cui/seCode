const quick_sort_ts = (q: number[], l: number, r: number) => {
  if (l >= r) return;
  let i: number = l - 1,
    j: number = r + 1,
    x: number = q[(l + r) >> 1];
  while (i < j) {
    do i++;
    while (q[i] < x);
    do j--;
    while (q[j] > x);
    if (i < j) {
      let mid: number = q[i];
      q[i] = q[j];
      q[j] = mid;
    }
  }
  quick_sort_ts(q, l, j), quick_sort_ts(q, j + 1, r);
};
