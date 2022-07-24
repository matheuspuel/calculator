import { Operator } from 'src/utils/operator'
import { StyledButton } from './styles'

export const OperatorButton = (props: {
  operator: Operator
  onPress: (operator: Operator) => void
}) => {
  return (
    <StyledButton
      text={props.operator + ''}
      onPress={() => props.onPress(props.operator)}
    />
  )
}
