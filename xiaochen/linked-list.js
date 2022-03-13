//206. 反转链表（easy）https://leetcode-cn.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null,
    cur = head,
    next = null;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

//237.删除链表中的节点 https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


//203. 移除链表元素 (easy) https://leetcode-cn.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 循环法
var removeElements = function (head, val) {
  let state = new ListNode(0);
  state.next = head;
  let cur = state;
  while (cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return state.next;
};

//递归法
var removeElements = function (head, val) {
  if (head === null) { //递归终止 遍历完了链表
    return head;
  }
  head.next = removeElements(head.next, val); //递归调用函数removeElements
  return head.val === val ? head.next : head; //如果当前元素值是val，则返回下一个元素，否则直接返回当前元素
};

//92. 反转链表 II(medium) https://leetcode-cn.com/problems/reverse-linked-list-ii/
// 基本思想，分离left到right这一段，单独调用反转链表，然后再把反转后的链表与原来的连接起来
// 还有点不太会，多练练
var reverseBetween = function (head, left, right) {
  const reverse = (node) => {
    let prev = null,
      curr = node,
      next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    //不需要return
  }
  const dummyNode = new ListNode(-1);
  dummyNode.next = head; //虚拟头节点

  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) { //pre遍历到left的前一个节点
    pre = pre.next;
  }

  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) { //rightNode遍历到right的位置
    rightNode = rightNode.next;
  }

  let leftNode = pre.next; //保存leftNode
  let curr = rightNode.next; //保存rightNode.next

  //切断left到right的子链
  pre.next = null;
  rightNode.next = null;

  //206题的逻辑 反转left到right的子链
  reverse(leftNode);

  //反向连接
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

//25. K 个一组翻转链表(hard) https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
// labuladong上面有解析
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverse = (a, b) => {
  let prev = null,
    cur = a,
    next = null;
  while (cur !== b) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
var reverseKGroup = function (head, k) {
  if (!head) return null;
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    if (!b) return head;
    b = b.next;
  }
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};


//21. 合并两个有序链表(easy) https://leetcode-cn.com/problems/merge-two-sorted-lists/
//跟归并排序的原理差不多
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let cur1 = list1,
    cur2 = list2,
    result = new ListNode(0),
    tmp = result;
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      tmp.next = cur1;
      cur1 = cur1.next;
      tmp = tmp.next;
    } else {
      tmp.next = cur2;
      cur2 = cur2.next;
      tmp = tmp.next;
    }
  }
  if (cur1) {
    tmp.next = cur1;
  }
  if (cur2) {
    tmp.next = cur2;
  }
  return result.next;
};


//141.环形链表(easy) https://leetcode-cn.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let map = new Map();
  while (head) {
    if (!map.has(head)) {
      map.set(head, 1);
      head = head.next;
    } else {
      return true;
    }
  }
  return false;
};