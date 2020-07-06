

import React from 'react'
import {useTheme} from './theme'

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
}

function CustomButton(props) {
  const [theme] = useTheme()
  return <button style={styles[theme]} {...props} />
}

export default CustomButton
