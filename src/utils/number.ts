export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export class DivideByZeroError extends Error {}

export const add = (a: number, b: number): number => a + b

export const subtract = (a: number, b: number): number => a - b

export const multiply = (a: number, b: number): number => a * b

export const divide = (a: number, b: number): number | DivideByZeroError =>
  b === 0 ? new DivideByZeroError() : a / b
