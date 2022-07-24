import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { darkTheme } from './theme/dark'
import { lightTheme } from './theme/light'
import { Calculator } from './views/Calculator'

export default function App() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Calculator />
    </ThemeProvider>
  )
}
