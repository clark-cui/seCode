// bfs用队列，
//dfs用栈，先入右节点，再入左节点
//都需要一个visited来记录访问过的节点

// dfs
// 695.岛屿的最大面积(medium)https://leetcode-cn.com/problems/max-area-of-island/
var maxAreaOfIsland = function(grid) {
  let row = grid.length, col = grid[0].length;
  function dfs (x, y) {
      //越界判断 当grid[x][y] === 0时 直接返回
      if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;
      grid[x][y] = 0;//当grid[x][y] === 1时，将当前单元格置为0
      let ans = 1, dx = [-1, 1, 0, 0], dy = [0, 0, 1, -1];//方向数组
      for (let i = 0; i < dx.length; i++) {//上下左右不断递归，计算每个岛屿的大小
          ans += dfs(x + dx[i], y + dy[i]);
      }
      return ans;
  }
  let res = 0;
  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          res = Math.max(res, dfs(i, j));//循环网格 更新最大岛屿
      }
  }
  return res;
};


//200.岛屿数量(medium) https://leetcode-cn.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;
  // 方向数组
  let directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  // 深度优先搜索
  const dfs = (i, j) => {
    // 超出边界 或者本身就已经是海水了
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == 0) return;
    // 淹没它 避免重复访问
    grid[i][j] = 0;
    for (let dir of directions) dfs(dir[0] + i, dir[1] + j);
  };
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};