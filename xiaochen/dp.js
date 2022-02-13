//509. 斐波那契数（easy） https://leetcode-cn.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */

// 常规写法
var fib = function (n) {
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1]
  }
  return memo[n]
};
// 优化复杂度的写法
var fib = function (n) {
  if (n < 2) return n;
  let prev2 = 0,
    prev1 = 1,
    result = 0;
  for (let i = 2; i <= n; i++) {
    result = prev2 + prev1;
    prev2 = prev1;
    prev1 = result;
  }
  return result;
};



//62. 不同路径 （medium）https://leetcode-cn.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // f[i][j]=f[i-1][j]+f[i][j-1]
  // f[0][j]=1,f[i][0]=1;

  let f = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};




//63. 不同路径 II（medium）  https://leetcode-cn.com/problems/unique-paths-ii/
/** 
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let f = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    f[i][0] = 1
  }
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    f[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = obstacleGrid[i][j] === 0 ? f[i - 1][j] + f[i][j - 1] : 0;
    }
  }
  return f[m - 1][n - 1];
};




//70. 爬楼梯 （medium）https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
// 常规写法
var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1, memo[2] = 2;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }
  return memo[n];
};
// 优化空间复杂度的结果
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  let prev2 = 1,
    prev1 = 2,
    result = 0
  for (let i = 3; i <= n; i++) {
    result = prev2 + prev1;
    prev2 = prev1;
    prev1 = result;
  }
  return result;
};



//279. 完全平方数 (medium) https://leetcode-cn.com/problems/perfect-squares/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n).fill(0); //初始化dp数组 当n为0的时候
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况就是每次+1 比如: dp[3]=1+1+1
    for (let j = 1; i - j * j >= 0; j++) { //枚举前一个状态
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
    }
  }
  return dp[n];
};


//120. 三角形最小路径和（medium） https://leetcode-cn.com/problems/triangle/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const m = triangle.length;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(triangle[i].length);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === m - 1) {
        dp[i][j] = triangle[i][j]
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};


// 53. 最大子数组和（简单） https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = 0,
    max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i], nums[i] + prev);
    max = Math.max(max, prev);
  }
  return max;
};


//152. 乘积最大子数组 （medium）https://leetcode-cn.com/problems/maximum-product-subarray/
//这个题的状态转移方程没看懂，查了下似乎不会考，不学了


//121. 买卖股票的最佳时机 （easy）https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[prices.length - 1][0];
};



//122.买卖股票II （medium）https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0]
};

//309. 最佳买卖股票时机含冷冻期(medium) https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
/**
 * @param {number[]} prices
 * @return {number}
 */
// 注明  这个板子是错的，后面我再去研究为啥错了
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  if (prices.length < 2) {
    return dp[prices.length - 1][0];
  }
  dp[1][0] = Math.max(0, prices[1] - prices[0]);
  dp[1][1] = -prices[0];
  for (let i = 2; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
  }
  return dp[prices.length - 1][0];
};

//714. 买卖股票的最佳时机含手续费 (medium) https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const dp = new Array(prices.length).fill(0).map(() => new Array(2));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
};

//198. 打家劫舍 （medium）https://leetcode-cn.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};
//64. 最小路径和 (medium) https://leetcode-cn.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// dp[0][0]=grid[0][0], dp[0][j]=dp[0][j-1]+grid[0][j];
//dp[i,0]=dp[i-1][0]+grid[i][0];
// dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j];
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  };
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  };
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};