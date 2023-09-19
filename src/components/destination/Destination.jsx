import React from 'react'
import Moon from './Moon'

export default function Destination() {
  const containerStyle = {
    backgroundColor: 'none'
  };

  return (
    <div className='dest-container' style={containerStyle}>
      <Moon />
    </div>
  )
}
