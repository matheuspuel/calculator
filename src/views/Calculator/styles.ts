import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background};
`

export const CalculatorPadContainer = styled.View`
  align-items: center;
  margin: 8px;
`

export const ButtonRow = styled.View`
  flex-direction: row;
`
