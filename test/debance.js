var containsNearbyDuplicate = function (nums, k) {
  let r = k,
    l = 0;
  for (r; r < nums.length; r++, l++) {
    let mid = nums.slice(l, r + 1);
    console.log(mid)
    let set = new Set();
    for (let i = 0; i < mid.length; i++) {
      if (!set.has(mid[i])) {
        set.add(mid[i])
      } else {
        return true;
      }
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));