/*
  https://leetcode.cn/problems/add-two-numbers/description/

  2. 两数相加

  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  示例 1：

  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8]
  解释：342 + 465 = 807.

  示例 2：

  输入：l1 = [0], l2 = [0]
  输出：[0]
  示例 3：

  输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  输出：[8,9,9,9,0,0,0,1]

  提示：

  每个链表中的节点数在范围 [1, 100] 内
  0 <= Node.val <= 9
  题目数据保证列表表示的数字不含前导零
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//   const _getNum = l1 => {
//     let num = 0
//     let node = l1
//     let count = 0
//     while (node) {
//       num += node.val * 10 ** count
//       node = node.next
//       count++
//     }
//     return num
//   }

//   const _toList = num => {
//     console.log(num)
//     let val = num % 10
//     const list = new ListNode(val)
//     list.add = (node) => {
//       let currNode = list
//       while (currNode.next) {
//         currNode = currNode.next
//       }
//       currNode.next = node
//     }
//     let n = Math.floor(num / 10)
//     while (n) {
//       val = n % 10
//       list.add(new ListNode(val))
//       n = Math.floor(n / 10)
//     }
//     return list
//   }

//   // 1. 拿到 l1 表示的数
//   const num1 = _getNum(l1)
//   // 2. 拿到 l2 表示的数
//   const num2 = _getNum(l2)
//   // 3. 两数相加
//   const sum = num1 + num2
//   // 4. 转换成链表
//   return _toList(sum)
// };

// 参考视频：https://www.bilibili.com/video/BV1GC4y1b7Cz/?spm_id_from=333.337.search-card.all.click&vd_source=8b9417088af38c747028c141d420e38b
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode()
  let curr = dummy
  let carry = 0

  while (l1 !== null || l2 !== null || carry) {
    const num1 = l1 ? l1.val : 0
    const num2 = l2 ? l2.val : 0
    const sum = num1 + num2 + carry
    carry = Math.floor(sum / 10)

    const num = sum % 10
    const node = new ListNode(num)
    curr.next = node
    curr = curr.next

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  return dummy.next
}

// test
// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
const l1 = new ListNode(9, new ListNode(9, new ListNode(9)))
const l2 = new ListNode(9, new ListNode(9))
console.log(addTwoNumbers(l1, l2))