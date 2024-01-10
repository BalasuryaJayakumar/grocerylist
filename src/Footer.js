import React from 'react'

const Footer = ({ length }) => {
  return (
    <footer className='footer'>
      <p>{length} list {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer