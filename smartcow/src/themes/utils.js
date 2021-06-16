import React from 'react'
import * as themes from './themes'

export const mapTheme = variables => {
  if (!variables) {
    return null
  }

  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--color-accent': variables.accent || '',
    '--color-highlight': variables.highlight || '',
    '--color-theme': variables.theme || '',
    '--color-muted': variables.muted || '',
    '--color-heading': variables.heading || '',
    '--color-paragraph': variables.paragraph || '',
    '--color-code-1': variables['code-1'] || variables.accent,
    '--color-code-2': variables['code-2'] || variables.highlight,
    '--color-code-3': variables['code-3'] || '',
    '--color-code-4': variables['code-4'] || '',
  }
}

export const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme) {
    return storedTheme
  }

  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  if (preferredTheme) {
    return preferredTheme
  }

  return null
}

export const applyTheme = theme => {
  const themeObject = mapTheme(themes[theme]?.colors)

  if (!themeObject) return

  localStorage.setItem('theme', theme)

  const root = document.documentElement

  Object.keys(themeObject).forEach(property => {
    if (property === 'name') {
      return
    }

    root.style.setProperty(property, themeObject[property])
    root.classList.toggle('dark', theme === 'dark')
  })
}

export const extendTheme = (extending, newTheme) => {
  return { ...extending, ...newTheme }
}

//This prevents a flash of the incorrect theme, but also requires a lot of copying and pasting due to IIFE (??) - Needs improvement
export const PreRenderThemeSetupScript = () => {
  const clientCode = `(function() {
    const themes = {
      light: {
        id: 'light',
        name: 'Classic',
        colors: {
          primary: '#6ce5b1',
          secondary: '#f3eeea',
          accent: '#ed8299',
          highlight: '#5e54c9',
          inverted: '#031926',
          'inverted-muted': '#4d4d4d',
          neutral: '#ffffff',
          'neutral-muted': '#fbf7f3',
          'code-1': '#5e54c9',
          'code-2': '#ef476f',
          'code-3': '#9f7aea',
          'code-4': '#e53e3e',
        },
      },
      dark: {
        id: 'dark',
        name: 'Dark',
        colors: {
          primary: '#ef476f',
          secondary: '#073b4c',
          accent: '#ffd166',
          highlight: '#ffd166',
          inverted: '#ffffff',
          'inverted-muted': '#dee7ea',
          neutral: '#01212b',
          'neutral-muted': '#072a35',
          'code-1': '#ffd166',
          'code-2': '#ef476f',
          'code-3': '#9f7aea',
          'code-4': '#e53e3e',
        },
      }
    }

    // See mapTheme()
    const mapTheme = (variables) => {
      if (!variables) {
        return null
      }

      return {
        '--color-primary': variables.primary || '',
        '--color-secondary': variables.secondary || '',
        '--color-accent': variables.accent || '',
        '--color-highlight': variables.highlight || '',
        '--color-theme': variables.theme || '',
        '--color-muted': variables.muted || '',
        '--color-heading': variables.heading || '',
        '--color-paragraph': variables.paragraph || '',
        '--color-code-1': variables['code-1'] || variables.accent,
        '--color-code-2': variables['code-2'] || variables.highlight,
        '--color-code-3': variables['code-3'] || '',
        '--color-code-4': variables['code-4'] || '',
      }
    }

    // See getInitialTheme()
    const getInitialTheme = () => {
      const storedTheme = localStorage.getItem('theme')

      if (storedTheme) {
        return storedTheme
      }

      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light'

      if (preferredTheme) {
        return preferredTheme
      }

      return null
    }

    // See applyTheme()
    const applyTheme = (theme) => {
      const themeObject = mapTheme(themes[theme]?.colors)

      if (!themeObject) return

      localStorage.setItem('theme', theme)

      const root = document.documentElement

      Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
          return
        }

        root.style.setProperty(property, themeObject[property])
      })
    }

    applyTheme(getInitialTheme())
  })()`

  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />
}
