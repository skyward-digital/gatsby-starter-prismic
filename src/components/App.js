import React, { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme } from '../themes/utils'
import { ThemeProvider } from '../context/Theme'
import '../../styles/index.css'

export const App = ({ children }) => {
  const [theme, setTheme] = useState()

  /* If the user prefers dark mode, set their theme to dark mode initially*/
  useEffect(() => {
    setTheme(() => getInitialTheme())
  }, [])

  /* Run the applyTheme function every time the theme state changes */
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return <ThemeProvider value={[theme, setTheme]}>{children}</ThemeProvider>
}
