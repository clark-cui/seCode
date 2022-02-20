// m x n  橘子 (0,1)，坏橘子，每隔1s，会感染上下左右,好是0,坏是1

/*
[
  [0,1,0]
  [1,0,1]
  [0,0,0]
  [1,0,0]
]
[
  [1,1,1]
  [1,1,1]
  [1,0,1]
  [1,1,0]

]

*/

// dp[i][j]  dp[i-1][j] dp[i][j+1] dp[i+1][j]  dp[i][j-1]

while(n>0){
  for(let i =0;i++;i<m){
    for(let j = 0;j++;j<n){
      if(dp[i][j]===1){
        if(i>0){
          dp[i-1][j]=1
        }
        if(j>0){
          dp[i][j-1]=1
        }
        if(i+1<m){
          dp[i+1][j]=1
        }
        if(j+1<n){
          dp[i][j+1]=1
        }
      }
    }
  }
  n--;
}

let newArr=dp.flat(2),badSum=0,goodSum=0;

for(let i =0;i<newArr.length;i++){
  if(newArr[i]===0)goodSum+=1
  else
}
