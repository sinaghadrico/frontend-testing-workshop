// testing with context and a custom render method


import React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import CustomButton from '../../components/custom-button'

test('renders with the light styles for the light theme', () => {
  const Wrapper = ({children}) => (
    <ThemeProvider initialTheme="light">{children}</ThemeProvider>
  )
  render(<CustomButton>Custom</CustomButton>, {wrapper: Wrapper})
  const button = screen.getByRole('button', {name: /custom/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})
