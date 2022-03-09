//找出树结构的target，输出路径
const data = [{
  id: 1,
  children: [{
      id: 2,
      children: [{
        id: 5
      }]
    },
    {
      id: 9,
      children: [{
          id: 4,
          children: [{
            id: 6
          }]
        },
        {
          id: 7,
          children: [{
            id: 10
          }]
        }
      ]
    }
  ]
}]
// 输入 (data,6) 输出 [1,9,4,6]
function getPath(p, target) {
  let result = [];
  const helper = (arr, target, res) => {
    for (let i = 0; i < arr.length; i++) {
      // 这里需要一个newRes是因为一个helper接收到的是一个res，而循环是有多个不同的实例，所以需要在循环里做隔离，不然会有互相影响
      let newRes = [...res];
      newRes.push(arr[i].id);
      if (arr[i].id === target) {
        result = newRes;
      }
      if (arr[i].children) {
        helper(arr[i].children, target, newRes);
      }
    }
  }


  helper(p, target, []);
  return result
}
console.log(getPath(data, 6));