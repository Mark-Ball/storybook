import React from 'react'

const Button = props => {
  const { name } = props

  const handleClick = () => console.log('button clicked')

  return (
    <button onClick={handleClick}>{name}</button>
  )
}

export default Button