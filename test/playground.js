/**
 * 
 * @param {*} q 
 * @param {*} l 
 * @param {*} r 
 */
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
  quick_sort(q, l, j);
  quick_sort(q, j + 1, r);
}
/**
 * 
 * @param {*} q 
 * @param {*} l 
 * @param {*} r 
 */
const quickPick = (q, l, r, k) => {
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
      q[j] = mid;
    }
  }
  if (j + 1 - l >= k) return quickPick(q, l, j, k)
  else return quickPick(q, j + 1, r, k - (j + 1 - l))
}

const t=(q,l,r,k)=>{
  if(l>=r)return q[l];
  let i=l-1,j=r+1,x=q[l+r>>1];
  while(i<j){
    do i++;while(q[i]<x);
    do j--;while(q[j]>x);
    if(i<j){
      let mid=q[i];
      q[i]=q[j];
      q[j]=mid;
    }
  }
   if(j+1-l>=k)return t(q,l,j,k)
   else return t(q,j+1,r,k-(j+1-l))
}
const hh=(q,l,r,k)=>{
  if(l>=r)return q[l];
  let i=l-1,j=r+1,x=q[l+r>>1];
  while(i<j){
    do i++;while(q[i]<x);
    do j--;while(q[j]>x);
    if(i<j){
      let mid=q[i];
      q[i]=q[j];
      q[j]=mid;
    }
  }
  if(j+1-l>=k)return hh(q,l,j,k)
  else return hh(q,j+1,r,k-(j+1-l))

}