import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { ClearButton } from '../../components/ClearButton'
import { Display } from '../../components/Display'
import { EmptyButton } from '../../components/EmptyButton'
import { EqualButton } from '../../components/EqualButton'
import { NumberButton } from '../../components/NumberButton'
import { OperatorButton } from '../../components/OperatorButton'
import { Digit, DivideByZeroError } from '../../utils/number'
import { getOperation, Operator } from '../../utils/operator'
import { ButtonRow, CalculatorPadContainer, Container } from './styles'

export const Calculator = () => {
  const [text, setText] = useState('')
  const [other, setOther] = useState<string>()
  const [operator, setOperator] = useState<Operator>()
  const [error, setError] = useState<string>()

  const onPressDigit = (n: Digit) => {
    if (operator === undefined || other !== undefined) {
      setText(t => t + n)
    } else {
      setOther(text)
      setText(n + '')
    }
  }

  const onPressOperator = (op: Operator) => {
    setOperator(op)
  }

  const onPressInvert = () => {
    setText(t => (t.startsWith('-') ? t.substring(1) : '-' + t))
  }

  const onPressDot = () => {
    setText(t => (t.includes('.') ? t : t + '.'))
  }

  const onPressEqual = () => {
    if (operator === undefined) return
    const operation = getOperation(operator)
    const res = operation(Number(other), Number(text))
    if (res instanceof DivideByZeroError) {
      setError('Error: Impossible to divide by zero')
      setText('')
      setOther(undefined)
      setOperator(undefined)
    } else {
      setText(res + '')
      setOther(undefined)
      setOperator(undefined)
    }
  }

  const onPressClear = () => {
    setText('')
    setOther(undefined)
    setOperator(undefined)
    setError(undefined)
  }

  return (
    <Container>
      <Display text={error === undefined ? text : error} />
      <CalculatorPadContainer>
        <ButtonRow>
          <ClearButton text="C" onPress={onPressClear} />
          <EmptyButton />
          <EmptyButton />
          <OperatorButton operator="/" onPress={onPressOperator} />
        </ButtonRow>
        <ButtonRow>
          <NumberButton digit={7} onPress={onPressDigit} />
          <NumberButton digit={8} onPress={onPressDigit} />
          <NumberButton digit={9} onPress={onPressDigit} />
          <OperatorButton operator="*" onPress={onPressOperator} />
        </ButtonRow>
        <ButtonRow>
          <NumberButton digit={4} onPress={onPressDigit} />
          <NumberButton digit={5} onPress={onPressDigit} />
          <NumberButton digit={6} onPress={onPressDigit} />
          <OperatorButton operator="-" onPress={onPressOperator} />
        </ButtonRow>
        <ButtonRow>
          <NumberButton digit={1} onPress={onPressDigit} />
          <NumberButton digit={2} onPress={onPressDigit} />
          <NumberButton digit={3} onPress={onPressDigit} />
          <OperatorButton operator="+" onPress={onPressOperator} />
        </ButtonRow>
        <ButtonRow>
          <Button text="+/-" onPress={onPressInvert} />
          <NumberButton digit={0} onPress={onPressDigit} />
          <Button text="." onPress={onPressDot} />
          <EqualButton text="=" onPress={onPressEqual} />
        </ButtonRow>
      </CalculatorPadContainer>
    </Container>
  )
}
