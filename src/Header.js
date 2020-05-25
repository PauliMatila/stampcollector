import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Stamp Collector</h1>
      <Link style={linkStyle} to='/'>List</Link> | <Link
      style={linkStyle} to='/summary'>Summary</Link> | <Link
      style={linkStyle} to='/addStamp'>Add Stamp</Link> | <Link
      style={linkStyle} to='/about'>About</Link> 
    </header>
  )
}

const headerStyle = {
  background: 'var(--pääväri2)',
  color: 'black',
  borderRadius: '10px',
  textAlign: 'center',
  padding: '20px'
}

const linkStyle = {
  background: '#68a5c7',
  font: '16px Arial',
  padding: '3px',
  borderRadius: '5px'
}