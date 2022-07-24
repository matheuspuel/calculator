import styled from 'styled-components/native'
import { Button } from '../Button'

export const StyledButton = styled(Button).attrs(({ theme }) => ({
  textStyle: { color: theme.color.danger },
}))``
