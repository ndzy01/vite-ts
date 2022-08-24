// @ts-nocheck
class ListNode<T = any> {
  val: T;

  next: ListNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

function fun(l: ListNode) {
  const clone = new ListNode(-1);
  let prev = clone;

  while (l) {
    prev.next = l;

    prev = prev.next;

    // @ts-ignore
    l = l.next;
  }

  return clone.next;
}
