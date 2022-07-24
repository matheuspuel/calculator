import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const DisplayContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.display};
`

export const DisplaySafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 16px;
`

export const DisplayText = styled.Text`
  text-align: right;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
`
