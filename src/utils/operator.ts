import { absurd } from './function'
import { add, divide, multiply, subtract } from './number'

export type Operator = '+' | '-' | '*' | '/'

export const getOperation = (operator: Operator) => {
  switch (operator) {
    case '+':
      return add
    case '-':
      return subtract
    case '*':
      return multiply
    case '/':
      return divide
    default:
      return absurd<never>(operator)
  }
}
