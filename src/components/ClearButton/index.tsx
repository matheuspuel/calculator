import { StyledButton } from './styles'

export const ClearButton = (props: { text: string; onPress: () => void }) => {
  return <StyledButton text={props.text} onPress={props.onPress} />
}
