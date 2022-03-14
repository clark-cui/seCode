const arr = [1, 2, 3, 4, 5, 4, 3];

function getDifferentChild(q) {
  const result = [];
  let map = new Map();
  for (let i = 0; i < q.length; i++) {
    if (!map.has(q[i])) {
      map.set(q[i], 1);
    } else {
      map.set(q[i], 2);
    }
  }
  for (let item of map) {
    // console.log(item);
    if (item[1] === 1) {
      result.push(item[0])
    }
  }
  return result;
}

console.log(getDifferentChild(arr));




function reverse(q) {
  const result = [];
  for (let i = 0; i < q.length; i++) {
    result.unshift(q[i])
  }
  return result;
}
console.log(reverse(arr));

function betterReverse(q) {
  let mid = Math.floor((q.length - 1) / 2);
  console.log(mid);
  let i = mid - 1,
    j = mid + 1;
  while (i >= 0 && j <= q.length - 1) {
    let stage = q[i];
    q[i] = q[j];
    q[j] = stage;
    i--;
    j++;
  }
  return q;
}
// console.log(betterReverse(arr));