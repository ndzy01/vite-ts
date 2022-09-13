import { ListNode } from '../index';

const traverseListNode = (l: ListNode) => {
  const clone = new ListNode(-1);
  let prev = clone;

  while (l) {
    prev.next = l;

    prev = prev.next;

    // @ts-ignore
    l = l.next;
  }

  return clone.next;
};

console.log(
  traverseListNode({ val: 1, next: { val: 2, next: { val: 4, next: null } } }),
);
