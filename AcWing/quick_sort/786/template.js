const getLeastNumbers = (arr, k) => {

  // 如果是返回第k个数
  return quick_sort(arr, 0, arr.length - 1, k);
  ////如果是返回前k个数额数组
  // quick_sort(arr,0,arr.length-1,k);

  // const result=[];
  // for(let i=0;i<arr.length;i++){
  //     // 注意这里是小于k，不是小于等于k，因为第k个的Index是k-1
  //     if(i<k){
  //         result.push(arr[i])
  //     }
  // }
  // return result;
};
// 快速选择算法
const quick_sort = (arr, l, r, k) => {
  if (l >= r) return arr[l];
  let i = l - 1,
    j = r + 1,
    x = arr[l + r >> 1];
  while (i < j) {
    do i++; while (arr[i] < x);
    do j--; while (arr[j] > x);
    if (i < j) {
      let mid = arr[i];
      arr[i] = arr[j];
      arr[j] = mid;
    }
  }
  let Sl = j - l + 1;
  if (Sl >= k) return quick_sort(arr, l, j, k)
  return quick_sort(arr, j + 1, r, k - Sl);
}


const quick_sort=(q,l,r)