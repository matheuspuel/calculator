import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { ButtonContainer, ButtonText, ButtonTouchableOpacity } from './styles'

export const Button = (props: {
  text: string
  onPress: () => void
  textStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
}) => {
  return (
    <ButtonTouchableOpacity onPress={props.onPress}>
      <ButtonContainer style={props.containerStyle}>
        <ButtonText style={props.textStyle}>{props.text}</ButtonText>
      </ButtonContainer>
    </ButtonTouchableOpacity>
  )
}
