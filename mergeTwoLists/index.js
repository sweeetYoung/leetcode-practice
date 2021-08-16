function ListNode (value, next) {
  this.value = value;
  this.next = next;
}

function mergeTwoLists (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

let list5 = new ListNode(5, null);
let list3 = new ListNode(3, list5);
let list1 = new ListNode(1, list3);