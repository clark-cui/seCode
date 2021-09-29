// 解法：
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
  let min = nums[0];
  let value = 0;
  for (let i = 1; i < nums.length; i++) {
    // 用当前值减之前的最小值，计算差值，所有差值中最大的值，存入value
    value = maxFunc(value, nums[i] - min);
    //更新最小值
    min = minFunc(min, nums[i]);
  }
  if (value > 0) {
    return value;
  }
  return -1;
};
const minFunc = (a, b) => {
  if (a >= b) {
    return b;
  }
  return a;
};
const maxFunc = (a, b) => {
  if (a >= b) {
    return a;
  }
  return b;
};

//错误解法
//错误原因： min与max是会移动的，最后再来相减算差值，会有j不在i右边的情况
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
  let min = nums[0];
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min && nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  if (max > min) {
    return max - min;
  }
  return -1;
};