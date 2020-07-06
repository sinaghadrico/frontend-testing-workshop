

import React from 'react'
import CustomButton from '../components/custom-button'
import {ThemeProvider, useTheme} from '../components/theme'

function ThemePage() {
  return (
    <ThemeProvider>
      <h1>Hit the Custom button!</h1>
      <hr />
      <CustomButton onClick={() => alert('that was Custom')}>Custom!</CustomButton>
      <hr />
      <ThemeToggler />
    </ThemeProvider>
  )
}

function ThemeToggler() {
  const [theme, setTheme] = useTheme()
  return (
    <button onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}>
      Toggle theme: {theme}
    </button>
  )
}

export default ThemePage
