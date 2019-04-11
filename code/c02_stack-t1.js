'use strict'

const Stack = require('./c01_stack.js')

function convertTo(decNumber, base) {
  const stack = new Stack()
  const digits = '0123456789ABCDEF'

  let remainder = 0
  let resutl = []

  // 辗转相除，记录所有余数（入栈）
  while (decNumber > 0) {
    remainder = Math.floor(decNumber % base)
    stack.push(remainder)

    decNumber = Math.floor(decNumber / base)
  }

  // 将栈内的元素依次出栈
  while (!stack.isEmpty()) {
    resutl.push(digits[stack.pop()])
  }

  return resutl.join('')
}

console.log(convertTo(255, 16))
