function generateParenthesis(n: number): string[] {
  if (n == 0) return [];

  const res: string[] = [];
  const track: string[] = [];

  backtrack(n, n, track, res);

  return res;

  function backtrack(
    left: number,
    right: number,
    track: string[],
    res: string[],
  ) {
    // 数量小于0, 不合法
    if (left < 0 || right < 0) return;

    // 若左括号剩下的多, 说明不合法
    if (right < left) return;

    // 所有括号用完, 得到合法组合
    if (left == 0 && right == 0) {
      res.push(track.join(''));
      return;
    }

    // 尝试添加左括号
    track.push('(');
    //这个地方一定要注意 需要拷贝一份track, 也就是采用[...track], 不然会影响其他分支
    backtrack(left - 1, right, [...track], res);
    track.pop();

    // 尝试添加右括号
    track.push(')');
    backtrack(left, right - 1, [...track], res);
    track.pop();
  }
}
