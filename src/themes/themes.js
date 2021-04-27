const colors = require('tailwindcss/colors')

const light = {
  id: 'light',
  name: 'Light',
  colors: {
    // primary: colors.orange['400'],
    // secondary: '#f3eeea',
    // accent: '#ed8299',
    // highlight: '#5e54c9',
    theme: colors.white,
    muted: colors.coolGray['100'],
    heading: colors.coolGray['900'],
    paragraph: colors.coolGray['700'],
    // 'code-1': '#5e54c9',
    // 'code-2': '#ef476f',
    // 'code-3': '#9f7aea',
    // 'code-4': '#e53e3e',
  },
}

const dark = {
  id: 'dark',
  name: 'Dark',
  colors: {
    // primary: '#6d59a8',
    // secondary: '#3b3a51',
    // accent: '#E15120',
    // highlight: '#ffd166',
    theme: colors.coolGray['800'],
    muted: colors.coolGray['900'],
    heading: colors.white,
    paragraph: colors.coolGray['200'],
    // 'code-1': '#ffd166',
    // 'code-2': '#ef476f',
    // 'code-3': '#9f7aea',
    // 'code-4': '#e53e3e',
  },
}

export { light, dark }
