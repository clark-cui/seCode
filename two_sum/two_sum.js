const twoSum = (nums, target) => {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (hashMap.has(value)) {
      return [hashMap.get(value), i]
    }
    hashMap.set(nums[i], i)
  }
}