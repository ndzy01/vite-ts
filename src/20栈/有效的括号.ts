function isValid(s: string): boolean {
  // 奇数长度的字符串 不满足规则
  if (s.length % 2 === 1) {
    return false;
  }

  // 创建 括号 map
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  // 左括号栈
  let stack: string[] = [];

  for (const ch of s) {
    if (map.has(ch)) {
      //左括号和右括号不匹配 huo 无左括号  不满足规则
      if (map.get(ch) !== stack[stack.length - 1] || !stack.length) {
        return false;
      }

      // 左括号出栈
      stack.pop();
    } else {
      // 左括号入栈
      stack.push(ch);
    }
  }

  return !stack.length;
}

const d = isValid('{[}');

console.log(d);
