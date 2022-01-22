#include <iostream>

using namespace std;
typedef long long LL; //把long long 重命名为LL 方便简写
const int N = 100010;
int n;
int q[N],tmp[N];

LL merge_sort(int l, int r){
  if(l>=r) return 0;
  int mid=l+r>>1;
  // 假设当逆序对在左段，那么归并左段就能得出逆序对数量，同理右段;所以res等于左段的递归+右段的递归
  LL res = merge_sort(l,mid)+merge_sort(mid+1,r);

  // 归并的过程（并处理同时存在左右段的逆序对，计入res中）
  int k=0,i=l,j=mid+1;
  while(i<=mid&&j<=r){
    if(q[i]<=q[j])tmp[k++]=q[i++];
    else {
      tmp[k++]=q[j++];
      //推的公式，逆序对，第一个数在左段，第二个数在右段
      res+=mid-i+1;
    }
  }
  // 扫尾
  while(i<=mid) tmp[k++]=q[i++];
  while(j<=r) tmp[k++]=q[j++];

  // 物归原主
  for(int i=l,j=0;i<=r;i++,j++)q[i]=tmp[j];
  return res;
}

int main(){
  cin >> n;
  for(int i=0;i<n;i++)cin >>q[i];

  cout <<merge_sort(0,n-1)<<endl;
}