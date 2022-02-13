//122. 买卖股票的最佳时机 II（medium）https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length;
  let result = 0;
  for (let i = 1; i < length; i++) {
    result += Math.max(0, prices[i] - prices[i - 1]);
  }
  return result;
};

//455. 分发饼干 (easy) https://leetcode-cn.com/problems/assign-cookies/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let index = s.length - 1,
    result = 0;
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      result++;
      index--;
    }
  }
  return result;
};


//56. 合并区间(medium) https://leetcode-cn.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 按照左边界排序
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [],
    prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    // 如果当前的左边界，大于上一项的右边界，就把上一项放入result,并更新prev
    if (prev[1] < curr[0]) {
      result.push(prev);
      prev = curr;
    } else {
      //否则，上一项的右边界就是上一项的右边界和当前项的右边界的最大值
      prev[1] = Math.max(curr[1], prev[1])
    }
  }
  // 这行代码是为了放入最后一个prev,因为循环到最后，最后一项就是prev，最后一项肯定不会与后面有相交，所以直接放入即可
  result.push(prev);
  return result;
};

//435. 无重叠区间 (medium) https://leetcode-cn.com/problems/non-overlapping-intervals/
// 这个题codetop没怎么考，不记了
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) {
      return 0;
  }

  //按右边界排序，然后从左往右遍历，右边界结束的越早，留给后面的区间的空间就越大，不重合的区间个数就越多
  intervals.sort((a, b) => a[1] - b[1]);

  const n = intervals.length;
  let right = intervals[0][1]; //right初始化为第一个区间的右边界
  let ans = 1; //最多的不重合区间的个数
  for (let i = 1; i < n; ++i) {
      //循环区间数组
      if (intervals[i][0] >= right) {
          //当区间的左边界大于上一个区间的右边界的时候 说明是一对不重合区间
          ++ans; //ans加1
          right = intervals[i][1]; //更新right
      }
  }
  return n - ans; //intervals的长度减去最多的不重复的区间 就是最少删除区间的个数
};

//300. 最长递增子序列 (medium) https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 这个题在codetop名列前茅 ，但是感觉有点难，那里用二分的逻辑没有太理解...后面有空再看吧

