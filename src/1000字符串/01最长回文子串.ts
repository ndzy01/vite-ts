// TODO 后面再研究

const longestPalindrome = (s: string): string => {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n), () => new Array(n).fill(false)); // 初始化数组

  for (let i = n - 1; i >= 0; i--) {
    // 循环字符串
    for (let j = i; j < n; j++) {
      // dp[i][j]表示子串 i～j 是否是回文子串
      // 回文子串必须满足 s[i]，s[j] 相等。并且向外扩展一个字符也相等，即 dp[i+1][j-1] 也是回文子串
      // j - i < 2 表示子串小于等于 1 也是回文串
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);

      if (dp[i][j] && j - i + 1 > res.length) {
        // 当前回文子串比之前的大，更新最大长度
        res = s.substring(i, j + 1);
      }
    }
  }

  return res;
};

console.log(longestPalindrome('cbbd'));
