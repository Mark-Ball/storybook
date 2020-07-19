import React, { useState } from 'react'

const Button = props => {
  const { name, click } = props

  const [counter, setCounter] = useState(0)

  const handleClick = () => setCounter(counter + 1)

  return (
    <button onClick={handleClick}>{name}: {counter}</button>
  )
}

export default Button