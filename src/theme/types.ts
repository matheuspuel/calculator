export interface Theme {
  color: ThemeColors
}

export type ThemeColors = {
  text: Color

  background: Color
  display: Color
  button: Color

  primary: Color
  danger: Color
}

type Color = string
