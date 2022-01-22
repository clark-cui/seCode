const removePalindromeSub = (s) => {
  for (let i = 0; i < s.length >> 1; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return 2
    }
  }
  return 1;
}