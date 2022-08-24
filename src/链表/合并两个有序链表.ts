// @ts-nocheck
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists1(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists1(list1.next, list2);

    return list1;
  } else {
    list2.next = mergeTwoLists1(list1, list2.next);

    return list2;
  }
}

function mergeTwoLists2(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const preHead = new ListNode(-1);

  let prev = preHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prev.next = list1;

      list1 = list1.next;
    } else {
      prev.next = list2;

      list2 = list2.next;
    }

    prev = prev.next;
  }

  prev.next = list1 === null ? list2 : list1;

  return preHead.next;
}
