/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    if (head == []) return head
    prev = null;
    curr = head;

    while (head.next !== null) {
      if (head == []) return head
      let prev = null; // reversal starts with null
      let curr = head; // 0 -> 1 -> 2
      while (curr !== null) {
        let nxt = curr.next; // TODO: Comments
        curr.next = prev;
        prev = curr;
        curr = nxt;
      }
      return l;
    }
  }
}
