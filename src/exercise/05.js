// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const boxStyle = {
  border: '1px solid #333',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}

const Box = props => {
  return (
    <>
      <div
        className={`box ${props.className}`}
        style={{...props.style, ...sizeofBox(props.size), fontStyle: 'italic'}}
      >
        {props.children}
      </div>
    </>
  )
}

const sizeofBox = size => {
  if (size === 'small') {
    return {
      width: '90px',
      height: '90px',
    }
  } else if (size === 'medium') {
    return {
      width: '180px',
      height: '180px',
    }
  } else if (size === 'large') {
    return {
      width: '270px',
      height: '270px',
    }
  }
  console.log(new Error('this is an invalid size type.'))

  return
}

const smallBox = (
  <Box size="small" style={{...boxStyle, backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{...boxStyle, backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{...boxStyle, backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
