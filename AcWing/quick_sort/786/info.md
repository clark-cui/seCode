# 排序数组的第 k 的数

- ### 题号：

  - [剑指 offer40](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)
  - [acwing786](https://www.acwing.com/activity/content/problem/content/820/)

- ### 解题思想：

  - 利用快排，利用 K 降低复杂度，这种算法也叫快速选择算法

- ### 解题步骤：

  1. 快排 1，2 步
  2. 判断左边点的个数 Sl 或者右边点的个数 Sr 与 k 的关系
  3. 递归其中一段即可

- ### 解析：

  - 就是普通的快速排序，排完后取第 k 个。但是有优化方法，结合快排的话，在快排的第 2 步，分成左右区间后，左边肯定是小于右边的，这时，k 小于等于左边的个数 Sl，那么 k 肯定在右区间；如果 k 大于左边的个数 Sl，那么 k 肯定在左区间。由此可以降低复杂度，从快排的 O(nlog(n)) 降低到 O(n)
