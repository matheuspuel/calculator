import { StyledButton } from './styles'

export const EqualButton = (props: { text: string; onPress: () => void }) => {
  return <StyledButton text={props.text} onPress={props.onPress} />
}
