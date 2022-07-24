import {
  DisplayContainer,
  DisplaySafeAreaContainer,
  DisplayText,
} from './styles'

const getFontSize = (len: number) =>
  len < 12 ? 32 : len < 16 ? 28 : len < 20 ? 24 : len < 24 ? 20 : 16

export const Display = (props: { text: string }) => {
  const fontSize = getFontSize(props.text.length)
  return (
    <DisplayContainer>
      <DisplaySafeAreaContainer>
        <DisplayText style={{ fontSize }}>{props.text}</DisplayText>
      </DisplaySafeAreaContainer>
    </DisplayContainer>
  )
}
