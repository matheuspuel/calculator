import styled from 'styled-components/native'

export const ButtonTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  aspect-ratio: 1;
`

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 8px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.button};
`

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.text};
`
