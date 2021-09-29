# 归并排序

- ### 题号：

  - acwing 模板题
  - acwing787

- ### 题目

  给定你一个长度为 n 的整数数列。

  请你使用归并排序对这个数列按照从小到大进行排序。

  并将排好序的数列按顺序输出。

  输入格式
  输入共两行，第一行包含整数 n。

  第二行包含 n 个整数（所有整数均在 1∼109 范围内），表示整个数列。

  输出格式
  输出共一行，包含 n 个整数，表示排好序的数列。

  数据范围

  ```
  1≤n≤100000
  ```

  输入样例：

  ```
  5
  3 1 2 4 5
  ```

  输出样例：

  ```
  1 2 3 4 5
  ```

- ### 解题思想：

  - 基于分治的思想。以数组的中心点为分（区别于快排），分为左边和右边，分别递归排序，最后合并起来。

- ### 解题步骤：

  1. 确定分界点 mid。
  2. 递归排序左边和右边
  3. 归并，把两个有序的序列（左边和右边）合二为一。（难点）

- ### 解析：

  - 第 1 步的解析：
    1. 分界点 mid 就是中间点（这个中间点是指数组下标的中间值），也就是真正的中间点。区别于快排，快排是找一个点，把他的值做分界的值，分为左边和右边，但这个点不一定在分界点上，只是他的值等于分界点的值。
  - 时间复杂度：
    O(nlogn)