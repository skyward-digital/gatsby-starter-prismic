import React, { createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ value, children }) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>

export { ThemeContext, ThemeProvider }
