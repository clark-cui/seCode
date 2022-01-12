const quick_select = (q: number[], l: number, r: number, k: number): number => {
  if (l >= r) return q[l];
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
  let Sl: number = j - l + 1;
  if (Sl >= k) return quick_select(q, l, j, k);
  return quick_select(q, j + 1, r, k - Sl);
};
