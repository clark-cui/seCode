//二分的前提是要有序数组


//704. 二分查找 （easy） https://leetcode-cn.com/problems/binary-search/
//递归写法(一般不这么写)
var search = (nums, target) => {
  const helper = (nums, target, left, right) => {
    if (left > right) {
      return -1;
    }
    let mid = left + right >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return helper(nums, target, left, mid - 1);
    } else {
      return helper(nums, target, mid + 1, right);
    }
  }
  return helper(nums, target, 0, nums.length - 1);
}

//循环写法
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) { //比较目标和中间元素的大小，然后不断缩小left和rihgt指针的范围
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};


//35. 搜索插入位置 (easy) https://leetcode-cn.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  //  注意ans初始值是最右的点
  let left=0,right=nums.length-1,ans=nums.length;
  while(left<=right){
      let mid=left+right>>1;
      if(nums[mid]===target){
          return mid;
      }else if(nums[mid]<target){
          left =mid +1;
      }else{
      //注意ans是等于mid才对
          ans =mid;
          right = mid -1;
      }
  }
  return ans;
};


