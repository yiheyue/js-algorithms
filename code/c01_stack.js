'use strict'

class Stack {
  constructor() {
    // 存储数据
    this._items = []
  }

  /* 向栈内压入一个元素 */
  push(item) {
    this._items.push(item)
  }

  /* 从栈顶弹出一个元素 */
  pop() {
    return this._items.pop()
  }

  /* 返回栈顶的元素 */
  peek() {
    return this._items[this._items.length - 1]
  }

  /* 判断栈是否为空 */
  isEmpty() {
    return !this._items.length
  }

  /* 返回栈中元素的个数 */
  size() {
    return this._items.length
  }

  /* 清空栈 */
  clear() {
    this._items = []
  }
}

module.exports = Stack
