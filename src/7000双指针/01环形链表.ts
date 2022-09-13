import { ListNode } from '../index';

const hasCycle1 = (head: ListNode | null): boolean => {
  const map = new Map();

  while (head) {
    if (map.has(head)) return true; // 当前节点在 map 中存在, 即说明有环

    map.set(head, true); // 否则加入 map

    if (!head.next) return false;

    head = head.next; // 迭代节点
  }

  return false;
};

// 快慢指针
const hasCycle2 = (head: ListNode | null): boolean => {
  // 设置快慢指针
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // @ts-ignore
    slow = slow.next;
    fast = fast.next.next;

    if (fast == slow) return true;
  }

  return false;
};

console.log(
  hasCycle1({
    val: 3,
    next: { val: 9, next: null },
  }),
  hasCycle2({
    val: 3,
    next: { val: 9, next: null },
  }),
);
