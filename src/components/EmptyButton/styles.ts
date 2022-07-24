import { Platform, View } from 'react-native'
import styled from 'styled-components/native'

export const EmptyButtonView = styled(View)`
  flex: 1;
  aspect-ratio: 1;
  ${Platform.OS === 'web' ? 'width: 72px;' : ''}
`
