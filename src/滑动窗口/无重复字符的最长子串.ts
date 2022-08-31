function lengthOfLongestSubstring(s: string): number {
  const set = new Set(); // 用以判断滑动窗口内是否有重复元素
  let i = 0, // 滑动窗口右边界
    j = 0, // 滑动窗口左边界
    maxLength = 0;

  if (s.length === 0) return 0;

  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      // 元素不存在 set 中, 加入 set 更新最大长度
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      // set 中有重复元素 删除窗口之外的元素, 直到滑动窗口没有重复元素
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }

      set.add(s[i]);
    }
  }

  return maxLength;
}
