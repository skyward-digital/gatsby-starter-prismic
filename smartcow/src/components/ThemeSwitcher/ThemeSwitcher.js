import React, { useContext } from 'react'
import * as themes from '../../themes/themes'
import { ThemeContext } from '../../context/Theme'

export const ThemeSwitcher = ({ ...props }) => {
  const [currentTheme, setCurrentTheme] = useContext(ThemeContext)

  const inactiveThemes = Object.values(themes).filter(theme => theme.id !== currentTheme)

  return (
    <div {...props}>
      {inactiveThemes.map(theme => (
        <button
          key={theme.id}
          type='button'
          className='group self-center flex items-center justify-center p-3 rounded transition duration-200'
          onClick={() => setCurrentTheme(theme.id)}
        >
          <span className='sr-only'>{theme.name}</span>
          <span className='text-heading'>{theme.name} mode</span>
          {/* <FontAwesomeIcon
            icon={faSwatchbook}
            className='text-2xl box-content opacity-50 group-hover:opacity-75 group-focus:opacity-75'
          /> */}
        </button>
      ))}
    </div>
  )
}
