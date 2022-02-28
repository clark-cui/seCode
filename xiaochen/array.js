//88. 合并两个有序数组(easy) https://leetcode-cn.com/problems/merge-sorted-array/

//注意这里的m与n是长度，不是序号，所以这里是小于号，不是小于等于号
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  let i = 0,
    j = 0,
    k = 0,
    tmp = [];
  while (i <= m - 1 && j <= n - 1) {
    if (nums1[i] <= nums2[j]) {
      tmp[k++] = nums1[i++]
    } else {
      tmp[k++] = nums2[j++]
    }
  }
  while (i <= m - 1) {
    tmp[k++] = nums1[i++];
  }
  while (j <= n - 1) {
    tmp[k++] = nums2[j++];
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = tmp[i]
  }
};


