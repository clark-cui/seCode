/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let l = 0,
    r = 0,
    max = [],
    arr = [];
  for (r; r < nums.length; r++) {
    arr.push(nums[r]);
    if (arr.length === k) {
      let now;
      arr.forEach((item) => {
        if (now === undefined) {
          now = item
        } else if (item > now) {
          now = item;
        } else {
          now = now;
        }
      })
      console.log(arr, now, '11')
      max.push(now);
      arr.shift();
      l++;
      console.log(arr, l, '22');
    }
  }
  return max;
};

maxSlidingWindow([1, 3, 1, 2, 0, 5], 3);