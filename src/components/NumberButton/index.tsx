import { Digit } from 'src/utils/number'
import { Button } from '../Button'

export const NumberButton = (props: {
  digit: Digit
  onPress: (digit: Digit) => void
}) => {
  return (
    <Button
      text={props.digit + ''}
      onPress={() => props.onPress(props.digit)}
    />
  )
}
